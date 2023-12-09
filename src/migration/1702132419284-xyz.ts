import { MigrationInterface, QueryRunner } from "typeorm"

export class Xyz1702132419284 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query( `CREATE TABLE user (id int not null auto_increment, 
        //     name varchar(255) not null, 
        //     primary key(id)) ENGINE= InnoDB `);
        // await queryRunner.query( `CREATE TABLE user (id int NOT NULL AUTO_INCREMENT, timestamp  bigint NOT NULL, name varchar(255) NOT NULL,email varchar(230) not null, PRIMARY KEY (id)) ENGINE=InnoDB `);

        await queryRunner.query(`
        INSERT INTO donor (username, age, gender, blood_group, password, mobile)
        VALUES ('JohnDoe', 25, 'Male', 'O+', 'password123', '98765432'),
               ('JaneDoe', 30, 'Female', 'A-', 'securepass', '0987654322');
      `)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query( `drop table user`)
    }

}
