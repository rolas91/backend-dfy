import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkiperCommerceFavorite } from './skiper-commerce-favorites.entity';
import { Repository, createQueryBuilder } from 'typeorm';
import { CommerceFavoriteInput, OkDto } from './skiper-commerce-favorites.dto';

@Injectable()
export class SkiperCommerceFavoritesService {

    constructor(
        @InjectRepository(SkiperCommerceFavorite) private readonly repository: Repository<SkiperCommerceFavorite>
    ) { }

    async getAllByUserId(id: number) {
        try {
            let result = await this.repository.find({
                relations: ["skiperCommerce"],
                where: { iduser: id }
            });
            return result;
        } catch (error) {
            console.log(error)
        }
    }

    async create(input: CommerceFavoriteInput) {
        let ok = new OkDto();
        if (!this.validateFavoriteIfExist(input)) {
            let favorite = this.parseFavorite(input);
            let result = await this.repository.save(favorite);
            ok.ok = (result) ? true : false;
            return ok;
        } else {
            ok.ok = false;
            return ok;
        }

    }

    async delete(id: number) {
        let ok = new OkDto();
        try {
            let favorite = await this.repository.findOneOrFail({ id });
            if (favorite) {
                let result: any = await this.repository.delete(favorite);
                ok.ok = (result.raw.affectedRows > 0) ? true : false;
                return ok;
            }
        } catch (error) {
            console.log(error);
            ok.ok = false;
            return ok;
        }
    }

    private parseFavorite(input: CommerceFavoriteInput) {
        let favorite = new SkiperCommerceFavorite();
        favorite.idcommerce = input.commerce_id;
        favorite.iduser = input.user_id;
        return favorite;
    }


    //Metodo para validar si ya existe un registro de un usuario con un comercio en especifico, 
    //para evitar redundancia de datos en la bd
    private async validateFavoriteIfExist(input: CommerceFavoriteInput) {
        return await createQueryBuilder("SkiperCommerceFavorite")
            .where("SkiperCommerceFavorite.iduser = :iduser", { iduser: input.user_id })
            .andWhere("SkiperCommerceFavorite.idcommerce = :idcommerce", { idcommerce: input.commerce_id })
            .getOne();
    }
}
