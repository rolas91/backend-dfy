import { validate } from "class-validator"

export async function validateEntity(entity) {
    let result = await validate(entity).then(errors => {
        if (errors.length > 0) {
            // console.log('errores ',errors)
            return errors.length;
        } else {
            // console.log('no hay error')
            return 0;
        }
    });
    return result;
}