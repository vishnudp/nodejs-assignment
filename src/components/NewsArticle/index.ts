import NewsArticleService from './service';
import { HttpError } from '../../config/error';
import * as conn from './../../config/connection/connection';
import { NextFunction, Request, Response } from 'express';
import   { NewsArticleModel }  from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const empmaster: NewsArticleModel[] = await NewsArticleService.findAll(req,req.body);

        res.status(200).json(empmaster);
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
        const empmaster: NewsArticleModel = await NewsArticleService.findOne(req.body,req);

        res.status(200).json(empmaster);
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
                const empmaster: NewsArticleModel = await NewsArticleService.insert(req.body,req);

                res.status(201).json(empmaster);
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
        let empmaster: NewsArticleModel;
        if (req.body && req.body.constructor === Array) {
            for (var i = 0; i < req.body.length; i++) {
                empmaster = await NewsArticleService.update(req.body[i],req);    
            }
        } else {
            empmaster = await NewsArticleService.update(req.body,req);
        }
        

        res.status(200).json(empmaster);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}




