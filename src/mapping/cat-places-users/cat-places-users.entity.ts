import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";


@Entity()
export class CatPlacesUsers {

    @PrimaryGeneratedColumn() id: number;
    @Column('varchar', { nullable: false, length: 50 }) name: string;
    @Column('longtext', { nullable: false }) url_img: string;

}
