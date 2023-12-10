import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Donor } from 'src/donors/entities/donor.entity';

export const databaseConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 4306,
    username: "root",
    password: "",
    database: "People",
    entities: [Donor],
    synchronize: false,
    autoLoadEntities: true,
    migrations: ['dist/src/donors/entities/donor.entity.ts'],
    migrationsTableName: 'donor1',
    migrationsRun: true,
};