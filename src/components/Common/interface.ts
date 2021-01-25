import {  ICommonModel } from './model';

/**
 * @export
 * @interface ICommonService
 */
export interface ICommonService {

    /**
     * @returns {Promise<ICommonModel[]>}
     * @memberof ICommonService
     */
    findAll(body:any,req:any): Promise<ICommonModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICommonModel>}
     * @memberof ICommonService
     */
    findOne(code: string,req:any): Promise<ICommonModel>;

    /**
     * @param {ICommonModel} ICommonModel
     * @returns {Promise<ICommonModel>}
     * @memberof ICommonService
     */
     insert(ICommonModel: ICommonModel,req:any): Promise<ICommonModel>;

    /**
     * @param {string} id
     * @returns {Promise<ICommonModel>}
     * @memberof ICommonService
     */
    remove(id: string,req:any): Promise<ICommonModel>;
    
    /**
     * @param {string} id
     * @returns {Promise<ICommonModel>}
     * @memberof ICommonService
     */
    update(ICommonModel: ICommonModel, req:any): Promise<ICommonModel>;
    
}
