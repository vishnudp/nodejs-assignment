import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as config from '../../config/env';
import * as crypto from 'crypto';
import { NextFunction } from 'express';


/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel {
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date;

    facebook: string;
    tokens: AuthToken[];

    profile: {
        name: string,
        gender: string,
        location: string,
        website: string,
        picture: string
    };
    comparePassword: (password: string) => Promise < boolean > ;
    gravatar: (size: number) => string;
}

export type AuthToken = {
    accessToken: string,
    kind: string
};


interface IConnectOptions {
    autoReconnect: boolean;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    loggerLevel ? : string;
    useNewUrlParser ? : boolean;
}

const connectOptions: IConnectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
};


//export default connections.db.model < ICommonModel > ('CommonModel', UserSchema);
export default  IUserModel;
