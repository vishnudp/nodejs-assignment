import * as Joi from 'joi';
import * as connections from '../../config/connection/connection';
import { NewsArticleModel } from './model';
import NewsArticleValidation from './validation';
import { NewsArticleService } from './interface';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(connections.default.newsAPIConfig.authKey);

/**
 * @export
 * @implements {NewsArticleModelService}
 */
const NewsArticleService: NewsArticleService = {
    /**
     * @returns {Promise < NewsArticleModel[] >}
     * @memberof NewsArticleService
     */
    async findAll(req,body:NewsArticleModel): Promise<NewsArticleModel[]> {
        try {

            setInterval(()=>{
                NewsArticleService.insert(body,req);
            },600000);
              return ;
            
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < NewsArticleModel >}
     * @memberof UserService
     */
    async findOne(body: NewsArticleModel, req): Promise<NewsArticleModel> {
        try {

            let DbCon = connections.default.mysqlDB;
            return ;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {NewsArticleModel} NewsArticle
     * @returns {Promise < NewsArticleModel >}
     * @memberof NewsArticleService
     */
    async insert(body: NewsArticleModel, req): Promise<NewsArticleModel> {
        try {            
            let mysqlCon = connections.default.mysqlDB;
            var result = newsapi.articles({
                sources: 'associated-press',
                q: 'bitcoin',
                category: 'technology',
                language: 'en',
                country: 'us',
                sortBy: 'top'
            }).then((articlesResponse: any) => {
                let inputString = '';

                function checkForDuplicate(articleId:any) {
                    return new Promise((resolve, reject) => {
                        var sqlUser = "select * from articels where article_id = "+articleId;
                        mysqlCon.query(sqlUser, (error: any, results: any, fields: any) => {
                            if (error) {
                                reject(error);
                            } else {
                                if(results.length > 0) {
                                    resolve(true);
                                } else {
                                    resolve(false);
                                }
                                
                            }
                        });
                    });
                }

                if (articlesResponse && articlesResponse.status == 'ok' && articlesResponse.sources && articlesResponse.articles.length > 0) {
                    inputString += articlesResponse.articels.map((articleObj: any) => {
                        let articlaValidate = checkForDuplicate(articleObj.article_id)
                        if (articlaValidate) {
                            return '(' + `\'${articleObj.article_id}\'` + ',' + `\'${articleObj.title}\'` + ',' + `\'${articleObj.description}\'` + ',' + `\'${articleObj.url}\'` + ',' + `\'${articleObj.publishedAt}\'` + ')';
                        }
                        
                    });
                    var sqlArticle = "insert into articles (article_id, title,  description, url, publishedAt) values " + inputString;
                    
                    mysqlCon.query(sqlArticle, (error: any, results: any, fields: any) => {
                        if (error) {
                            throw error;
                        } else {
                            return articlesResponse;
                        }
                    });
                }
                return articlesResponse;

            });
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < NewsArticleModel >}
     * @memberof NewsArticleService
     */
    async update(body: NewsArticleModel, req): Promise<NewsArticleModel> {
        try {

            let DbCon = connections.default.mysqlDB;
            return ;
        } catch (error) {
            throw new Error(error.message);
        }
    }

};

export default NewsArticleService;
