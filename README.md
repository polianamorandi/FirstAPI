# SAP API

## Database

Run `docker run --name sap-db -e POSTGRES_PASSWORD=sapadmin -e POSTGRES_DB=sap-db -p 5432:5432 -d postgres:alpine`, to create a data base
Run `yarn typeorm migration:run` to run the migrations

Run `yarn typeorm migration:create -n <migration-name>` to create a migration
Run `yarn typeorm migration:revert` to revert your last migration, use this only in your local machine
