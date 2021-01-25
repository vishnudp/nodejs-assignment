import * as Joi from 'joi';
import * as connections from '../../config/connection/connection';
import { ICommonModel } from './model';
import CommonValidation from './validation';
import { ICommonService } from './interface';

/**
 * @export
 * @implements {ICommonModelService}
 */
const CommonService: ICommonService = {
    /**
     * @returns {Promise < ICommonModel[] >}
     * @memberof CommonService
     */
    async findAll(body, req): Promise<ICommonModel[]> {
        try {

            let DbCon = connections.default.mysqlDB;

            return ;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @param {string} 
     * @returns {Promise < ICommonModel >}
     * @memberof UserService
     */
    async findOne(id: string, req): Promise<ICommonModel> {
        try {
            
            let DbCon = connections.default.mysqlDB;


            return ;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICommonModel} common
     * @returns {Promise < ICommonModel >}
     * @memberof CommonService
     */
    async insert(body: ICommonModel, req): Promise<ICommonModel> {
        try {
            let DbCon = connections.default.mysqlDB;


            return;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    async update(body: ICommonModel, req): Promise<ICommonModel> {
        try {
            let DbCon = connections.default.mysqlDB;

            return ;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICommonModel >}
     * @memberof CommonService
     */
    async remove(id: string, req): Promise<ICommonModel> {
        try {
            let DbCon = connections.default.mysqlDB;

            return ;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default CommonService;
