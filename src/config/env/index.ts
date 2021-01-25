import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: string | number;
    username: string;
    password: string;
    host: string;
    database: string;
    mysqlPort :string | number;
    secret: string;
    timeZone: string;
    region:string;
    accessKeyId:string;
    secretAccessKey:string;
    bucketName:string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    port: process.env.PORT || 3010,
    username: "root",
    password :"",
    host : "localhost",
    mysqlPort : 3306,    
    database:"news-article",
    secret: process.env.SECRET || '@QEGTUI',
    timeZone : process.env.TZ ||  'Asia/Calcutta',
    region:'ap-south-1',
    accessKeyId:'AKIAJGSCZT2YGZH3DMYQ',
    secretAccessKey:'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',
    bucketName:'invictus-data'
};

const production: IConfig = {
    port: process.env.PORT || 8086,
    username: "root",
    password :"",
    host : "localhost",
    mysqlPort : 3306,    
    database:"news-article",
    secret: process.env.SECRET || '@QEGTUI',
    timeZone : process.env.TZ ||  'Asia/Calcutta',
    region:'ap-south-1',
    accessKeyId:'AKIA34ETRAE7HHYQJVMK',
    secretAccessKey:'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',
    bucketName:'files.invictusdigisoft.com'
};

const test: IConfig = {
    port: process.env.PORT || 3010,
    username: "root",
    password :"",
    host : "localhost",
    mysqlPort : 3306,     
    database:"news-article",
    secret: process.env.SECRET || '@QEGTUI',
    timeZone : process.env.TZ ||  'Asia/Calcutta',
    region:'ap-south-1',
    accessKeyId:'AKIAJGSCZT2YGZH3DMYQ',
    secretAccessKey:'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',
    bucketName:'invictus-data'
};

const config: {
    [name: string]: IConfig
} = {
    test,
    development,
    production
};

export default config[NODE_ENV];
