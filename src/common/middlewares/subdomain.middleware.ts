import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class SubdomainMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const host = req.headers.host || '';
        const domainParts = host.split('.');

        const shop = domainParts.length > 2 ? domainParts[0] : null;

        if (shop && shop !== 'www' && shop !== 'sophiabooks') {
            req['locals'] = { shop };
        }

        next();
    }
}
