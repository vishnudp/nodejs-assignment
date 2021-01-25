import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as config from '../../config/env';
import * as crypto from 'crypto';
import { NextFunction } from 'express';


/**
 * @export
 * @interface ICommonModel
 * @extends {Document}
 */
export interface ICommonModel {
    config_id: number,
    type: object,
    name: object,
    status: string,
    is_consumable: string
}

export default ICommonModel;
