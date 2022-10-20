import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity() //-> da se zna da se radi o entitetu, tj tabeli u bazi
export class User {
    @PrimaryGeneratedColumn() // -> da se zna da je primary key i autoincrement
    id: number; //int 

    @Column()
    name: string; //varchar

    @Column()
    other: string;
}
