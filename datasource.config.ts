import { Donor } from "src/donors/entities/donor.entity"
import { DataSource } from "typeorm"
const datasource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 4306,
    username: "root",
    password: "",
    database: "bloodBank",
    entities: ['dist/src/donors/entities/donor.entity.ts'],
    synchronize: false,
    migrations: ['1702129540375-xyz.ts'],
    migrationsTableName: 'donor',
});
export default datasource