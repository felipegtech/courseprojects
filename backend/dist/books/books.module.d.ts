import { type OnModuleInit } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { ReviewsService } from './reviews.service.js';
export declare class BooksModule implements OnModuleInit {
    private readonly booksService;
    private readonly reviewsService;
    constructor(booksService: BooksService, reviewsService: ReviewsService);
    onModuleInit(): Promise<void>;
}
