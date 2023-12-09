import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Donor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    age: number;

    @Column()
    gender: string;
    
    @Column()
    blood_group: string;
    
    @Column()
    password: string;
}
