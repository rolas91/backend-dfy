import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersAddress } from './users-address.entity';
import { Repository } from 'typeorm';
import { UsersAddressInput } from './users-address.dto';

@Injectable()
export class UsersAddressService {
    constructor(@InjectRepository(UsersAddress) private readonly repository: Repository<UsersAddress>) { }

    async getAll() {
        try {
            return await this.repository.find({
                relations: ["catplaceuser", "user"]
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getByIdUser(iduser: number) {
        try {
            return await this.repository.find({
                relations: ["catplaceuser", "user"],
                where: { iduser: iduser }
            });
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id: number) {
        try {
            let result = await this.repository.findOneOrFail({
                relations: ["catplaceuser", "user"],
                where: { id: id }
            });
            if (result) {
                return result;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error)
        }
    }

    async create(input: UsersAddressInput) {
        try {
            let result = this.parseUsersAddres(input);
            result = await this.repository.save(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async update(input: UsersAddressInput) {
        try {
            let result = await this.getById(input.id);
            if (result) {
                result.placeid = input.placeid;
                result.address = input.address;
                result.apt_house_number = input.apt_house_number;
                result.lat = input.lat;
                result.lng = input.lng;
                result.point_references = input.point_references;
                return await this.repository.save(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    private parseUsersAddres(input: UsersAddressInput) {
        let usersAddress: UsersAddress = new UsersAddress();
        usersAddress.address = input.address;
        usersAddress.apt_house_number = input.apt_house_number;
        usersAddress.id_cat_place_user = input.id_cat_place_user;
        usersAddress.iduser = input.iduser;
        usersAddress.placeid = input.placeid;
        usersAddress.lat = input.lat;
        usersAddress.lng = input.lng;
        usersAddress.point_references = input.point_references;
        return usersAddress;
    }
}
