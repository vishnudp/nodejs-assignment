import * as Joi from 'joi';
import Validation from '../validation';
import { NewsArticleModel } from './model';

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
     * @param {NewsArticleModel} params
     * @returns {Joi.ValidationResult<NewsArticleModel >}
     * @memberof CommonValidation
     */
    createNewsArticle(
        params: NewsArticleModel
    ): Joi.ValidationResult<NewsArticleModel> {
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
    getNewsArticle(
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
    removeNewsArticle(
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
