
import config from '../env/index';
var mysql = require('mysql');
var moment = require('moment-timezone');

moment.tz.setDefault(config.timeZone);
moment.locale('en');



interface IConnectOptions {
    autoReconnect: boolean;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    loggerLevel ? : string;
    useNewUrlParser ? : boolean;
    useFindAndModify ? : boolean;
    useCreateIndex? : boolean;
}

const connectOptions: IConnectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
    useFindAndModify : false,
    useCreateIndex: true
};

let db_config = {
    host: config.host,
    user: config.username,
    password: config.password,
    port: config.mysqlPort,
    database:'news-article'
};

let newsAPIConfig = {
    authKey : 'e4a51e3ab35f4f1ea7a5c41bb8e6f4bf'
}

function handleDisconnect() {
    let mysqlconnection = mysql.createConnection(db_config); 
                                                    
  
    mysqlconnection.connect(function(err:any) {             
      if(err) {                                    
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }else{
        console.log('\x1b[32m', 'Mysql :: connected');
      }                                     
    });                                     
                                            
    mysqlconnection.on('error', function(err:any) {
      
        console.log('db error', err);
      
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
            handleDisconnect();                         
        } else {                                     
            throw err;                               
        }
    });

    return mysqlconnection;
}

let mysqlconnection  = handleDisconnect();

const connData = {
    mysqlDB : mysqlconnection,
    timeZone : moment,
    region:config.region,
    newsAPIConfig:newsAPIConfig
}
export default connData;