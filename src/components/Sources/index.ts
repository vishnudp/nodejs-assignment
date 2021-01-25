import SourcesService from './service';
import { HttpError } from '../../config/error';
import * as conn from './../../config/connection/connection';
import { NextFunction, Request, Response } from 'express';
import   { SourcesModel }  from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const sourcemaster: any[] = await SourcesService.findAll(req);

        res.status(200).json(sourcemaster);
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
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    
    try {
        const sourcemaster: SourcesModel = await SourcesService.findOne(req.body,req);

        res.status(200).json(sourcemaster);
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
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
            try {
                const sourcemaster: SourcesModel = await SourcesService.insert(req.body,req);

                res.status(201).json(sourcemaster);
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
export async function update(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        let sourcemaster: SourcesModel;
        if (req.body && req.body.constructor === Array) {
            for (var i = 0; i < req.body.length; i++) {
                sourcemaster = await SourcesService.update(req.body[i],req);    
            }
        } else {
            sourcemaster = await SourcesService.update(req.body,req);
        }
        

        res.status(200).json(sourcemaster);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}




