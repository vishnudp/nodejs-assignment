import * as Joi from 'joi';
import Validation from '../validation';
import { ICommonModel } from './model';

/**
 * @export
 * @class CommonValidation
 * @extends Validation
 */
class CommonValidation extends Validation {

    /**
     * Creates an instance of CommonValidation.
     * @memberof CommonValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ICommonModel} params
     * @returns {Joi.ValidationResult<ICommonModel >}
     * @memberof CommonValidation
     */
    createUser(
        params: ICommonModel
    ): Joi.ValidationResult < ICommonModel > {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required()
        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CommonValidation
     */
    getUser(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CommonValidation
     */
    removeUser(
        body: {
            id: string
        }
    ): Joi.ValidationResult < {
        id: string
    } > {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new CommonValidation();
