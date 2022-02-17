import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import JWT_CONFIG from '../config/auth'
import AppError from '../errors/AppError'

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
  type: string;
}

export default function checkAuth(req: Request, resp: Response, next: NextFunction): void {
  if (req.method === 'OPTIONS') return next()
  const authHeader = req.headers.authorization

  if (!authHeader) throw new AppError('Não autenticado', 401)

  const [, token] = authHeader.split(' ')

  try {
    const decodedToken = verify(token, JWT_CONFIG.secret)
    const { sub, type } = decodedToken as TokenPayload

    req.user = { id: sub, type }
    return next()
  } catch {
    throw new AppError('Token inválido', 403)
  }
}