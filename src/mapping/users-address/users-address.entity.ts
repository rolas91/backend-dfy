import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CatPlacesUsers } from '../cat-places-users/cat-places-users.entity';
import { User } from '../users/user.entity';

@Entity('users_address')
export class UsersAddress {

    @PrimaryGeneratedColumn() id: number;

    @Column('int', { nullable: false }) iduser: number;

    @Column('longtext', { nullable: false }) placeid: string;

    @Column('int', { nullable: false }) id_cat_place_user: number;

    @Column('double', { nullable: false }) lat: number;

    @Column('double', { nullable: false }) lng: number;

    @Column('varchar', { nullable: false, length: 120 }) address: string;

    @Column('varchar', { nullable: false, length: 50 }) apt_house_number: string;

    @Column('varchar', { nullable: false, length: 120 }) point_references: string;

    @ManyToOne(type => CatPlacesUsers, { nullable: false })
    @JoinColumn({ name: 'id_cat_place_user' }) catplaceuser: CatPlacesUsers;

    @ManyToOne(type => User, { nullable: false })
    @JoinColumn({ name: 'iduser' }) user: User;

}
