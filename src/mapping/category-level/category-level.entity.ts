import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsString, IsNotEmpty, IsDecimal, MaxLength, IsNumber, MinLength } from "class-validator";

@Entity()
export class CategoryLevel {

    @PrimaryGeneratedColumn() id: number;

    @IsString() @IsNotEmpty() @MaxLength(50) @MinLength(7)
    @Column('varchar', { nullable: false, length: 50 }) description: string;

    @IsNumber() @IsNotEmpty()
    @Column('double', { nullable: false }) percentage: number;
}
