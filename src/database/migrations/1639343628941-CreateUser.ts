import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUser1639192432496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'user',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'password',
              type: 'varchar'
            },
            {
              name: 'type',
              type: 'uuid',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              isNullable: true,
            },
            {
              name: 'deleted_at',
              type: 'timestamp',
              isNullable: true,
            },
          ]
        })
      )

      await queryRunner.createForeignKey('user', new TableForeignKey({
        columnNames: ['type'],
        referencedColumnNames:['id'],
        referencedTableName: 'user_type',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('user')
    }

}
