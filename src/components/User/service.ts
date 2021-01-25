import * as Joi from 'joi';
import UserModel, { IUserModel } from './model';
import UserValidation from './validation';
import { IUserService } from './interface';

/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < IUserModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise < IUserModel[] > {
        return;
    },

    /**
     * @param {string} id
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async findOne(id: string): Promise < IUserModel > {
        try {
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IUserModel} user
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async insert(body: IUserModel): Promise < IUserModel > {
        try {
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IUserModel >}
     * @memberof UserService
     */
    async remove(id: string): Promise < IUserModel > {
        try {
            return ;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default UserService;
