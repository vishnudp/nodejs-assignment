import * as Joi from 'joi';
import * as connections from '../../config/connection/connection';
import { SourcesModel } from './model';
import SourcesValidation from './validation';
import { SourcesService } from './interface';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(connections.default.newsAPIConfig.authKey);

/**
 * @export
 * @implements {SourcesModelService}
 */
const SourcesService: SourcesService = {
    /**
     * @returns {Promise < SourcesModel[] >}
     * @memberof SourcesService
     */
    async findAll(req): Promise<any> {
        try {
            
            let mysqlCon = connections.default.mysqlDB;
            let result = await getResult();
            function getResult() {
                return new Promise((resolve, reject) => {
                    var sqlUser = "select * from sources";
                    mysqlCon.query(sqlUser, (error: any, results: any, fields: any) => {
                        if (error) {
                            reject('error');
                        } else {
                            let tempResult = JSON.stringify(results);
                            resolve(JSON.parse(tempResult));
                        }
                    });
                });
            }            
           
            return result;

        } catch (error) {
            throw new Error(error.message);
        }
    },



    /**
     * @param {string} id
     * @returns {Promise < SourcesModel >}
     * @memberof UserService
     */
    async findOne(body: SourcesModel, req): Promise<SourcesModel> {
        try {

            let DbCon = connections.default.mysqlDB;
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {SourcesModel} Sources
     * @returns {Promise < SourcesModel >}
     * @memberof SourcesService
     */
    async insert(body: SourcesModel, req): Promise<SourcesModel> {
        try {

            let mysqlCon = connections.default.mysqlDB;
            var result = newsapi.sources({
                category: 'technology', // optional
                language: 'en', // optional
                country: 'us' // optional
            }).then((sourcesResponse: any) => {
                let inputString = '';
                if (sourcesResponse && sourcesResponse.status == 'ok' && sourcesResponse.sources && sourcesResponse.sources.length > 0) {
                    inputString += sourcesResponse.sources.map((sourceObj: any) => {
                        return '(' + `\'${sourceObj.id}\'` + ',' + `\'${sourceObj.name}\'` + ',' + `\'${sourceObj.url}\'` + ',' + `\'${sourceObj.category}\'` + ')';
                    });
                    var sqlUser = "insert into sources (id, name,  url, category) values " + inputString;
                    console.log('sqlUser--', sqlUser);
                    mysqlCon.query(sqlUser, (error: any, results: any, fields: any) => {
                        if (error) {
                            throw error;
                        } else {
                            return sourcesResponse;
                        }
                    });
                }
                return sourcesResponse;

            });
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < SourcesModel >}
     * @memberof SourcesService
     */
    async update(body: SourcesModel, req): Promise<SourcesModel> {
        try {

            let DbCon = connections.default.mysqlDB;
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    }

};

export default SourcesService;
