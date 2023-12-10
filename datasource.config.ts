import { Donor } from "src/donors/entities/donor.entity"
import { DataSource } from "typeorm"
const datasource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 4306,
    username: "root",
    password: "",
    database: "People",
    entities: ["dist/**/*.entity{ .ts,.js}"],
migrations: ["dist/src/migration/*{.ts,.js}"],
    synchronize: false,
    // migrations: ['1702129540375-xyz.ts'],
    migrationsTableName: 'user',
    logging:true,
    migrationsRun : true
});
export default datasource