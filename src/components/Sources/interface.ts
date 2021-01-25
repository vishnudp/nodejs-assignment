import {  SourcesModel } from './model';

/**
 * @export
 * @interface SourcesService
 */
export interface SourcesService {

    /**
     * @returns {Promise<SourcesModel[]>}
     * @memberof SourcesService
     */
    findAll(req:any): Promise<any>;

    /**
     * @param {string} code
     * @returns {Promise<SourcesModel>}
     * @memberof SourcesService
     */
    findOne(SourcesModel: SourcesModel,req:any): Promise<SourcesModel>;

    /**
     * @param {SourcesModel} SourcesModel
     * @returns {Promise<SourcesModel>}
     * @memberof SourcesService
     */
    insert(SourcesModel: SourcesModel, req:any): Promise<SourcesModel>;

    /**
     * @param {string} id
     * @returns {Promise<SourcesModel>}
     * @memberof SourcesService
     */
    update(SourcesModel: SourcesModel,req:any): Promise<SourcesModel>;

}
