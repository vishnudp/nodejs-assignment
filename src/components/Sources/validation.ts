import * as Joi from 'joi';
import Validation from '../validation';
import { SourcesModel } from './model';

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
     * @param {SourcesModel} params
     * @returns {Joi.ValidationResult<SourcesModel >}
     * @memberof CommonValidation
     */
    createSources(
        params: SourcesModel
    ): Joi.ValidationResult<SourcesModel> {
        const schema: Joi.Schema = Joi.object().keys({
            emp_name: Joi.string().required(),

        });

        return Joi.validate(params, schema);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CommonValidation
     */
    getSources(
        body: {
            id: string
        }
    ): Joi.ValidationResult<{
        id: string
    }> {
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
    removeSources(
        body: {
            id: string
        }
    ): Joi.ValidationResult<{
        id: string
    }> {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        });

        return Joi.validate(body, schema);
    }
}

export default new CommonValidation();
