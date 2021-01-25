import {  NewsArticleModel } from './model';

/**
 * @export
 * @interface NewsArticleService
 */
export interface NewsArticleService {

    /**
     * @returns {Promise<NewsArticleModel[]>}
     * @memberof NewsArticleService
     */
    findAll(req:any,NewsArticleModel: NewsArticleModel): Promise<NewsArticleModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<NewsArticleModel>}
     * @memberof NewsArticleService
     */
    findOne(NewsArticleModel: NewsArticleModel,req:any): Promise<NewsArticleModel>;

    /**
     * @param {NewsArticleModel} NewsArticleModel
     * @returns {Promise<NewsArticleModel>}
     * @memberof NewsArticleService
     */
    insert(NewsArticleModel: NewsArticleModel, req:any): Promise<NewsArticleModel>;

    /**
     * @param {string} id
     * @returns {Promise<NewsArticleModel>}
     * @memberof NewsArticleService
     */
    update(NewsArticleModel: NewsArticleModel,req:any): Promise<NewsArticleModel>;

}
