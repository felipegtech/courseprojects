import type { Request, Response } from 'express';
import { books } from '../data/Books.js'; 


export class HomeController {
    static index(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData['title'] = 'Home';

        res.render('home/index', { viewData: viewData });
    }

    static about(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData['title'] = 'About';

        res.render('home/about', { viewData: viewData });
    }

    static contact(req: Request, res: Response): void {
        const viewData: { [key: string]: any } = {};
        viewData['title'] = 'Contact';

        res.render('home/contact', { viewData: viewData });
    }

    static Main_Point(req: Request, res: any) { 

        const viewData: any = {}; 

        viewData["books"] = books; 

        res.render('home/books', viewData); 

    }  
}

