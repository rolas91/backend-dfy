import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../users/user.entity";
import { SkiperCommerce } from "../skiper-commerce/skiper-commerce.entity";
import { CommerceRol } from "../commerce-rol/commerce-rol.entity";

@Entity()
export class UserCommerceRoles {

    @PrimaryGeneratedColumn() id:number;

    @ManyToOne(type => User,{nullable:false})
    @JoinColumn({name:'iduser'}) user:User;

    @ManyToOne(type => SkiperCommerce, {nullable: false})
    @JoinColumn({name:'idcommerce'}) skiperCommerce: SkiperCommerce;

    @ManyToOne(type => CommerceRol, {nullable: false})
    @JoinColumn({name:'idrol'}) rol: CommerceRol;
}
