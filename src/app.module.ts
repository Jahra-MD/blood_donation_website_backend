import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbTestModule } from './bb_test/bb_test.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { DonorsModule } from './donors/donors.module';
import { Donor } from './donors/entities/donor.entity';
import { databaseConfig } from './database/mysql.config';
@Module({
  imports: [BbTestModule,
  TypeOrmModule.forRoot(databaseConfig),
  DonorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
