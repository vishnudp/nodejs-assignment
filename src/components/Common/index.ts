import CommonService from './service';
import { HttpError } from '../../config/error';
import * as conn from './../../config/connection/connection';
import { NextFunction, Request, Response } from 'express';
import { ICommonModel } from './model';

interface IConnectOptions {
    autoReconnect: boolean;
    reconnectTries: number; // Never stop trying to reconnect
    reconnectInterval: number;
    loggerLevel?: string;
    useNewUrlParser?: boolean;
}

const connectOptions: IConnectOptions = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true,
};


/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const common: ICommonModel[] = await CommonService.findAll(req.body, req);

        res.status(200).json(common);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const common: ICommonModel = await CommonService.findOne(req.params.id, req);

        res.status(200).json(common);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const common: ICommonModel = await CommonService.insert(req.body, req);

        res.status(201).json(common);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const common: ICommonModel = await CommonService.remove(req.params.id, req);

        res.status(200).json(common);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        let commonmaster: ICommonModel;
        if (req.body && req.body.constructor === Array) {
            for (var i = 0; i < req.body.length; i++) {
                commonmaster = await CommonService.update(req.body[i], req);
            }
        } else {
            commonmaster = await CommonService.update(req.body, req);
        }

        res.status(200).json(commonmaster);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
