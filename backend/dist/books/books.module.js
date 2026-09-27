var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller.js';
import { BooksService } from './books.service.js';
import { ReviewsController } from './reviews.controller.js';
import { ReviewsService } from './reviews.service.js';
import { Book } from './entities/book.entity.js';
import { Review } from './entities/review.entity.js';
let BooksModule = class BooksModule {
    booksService;
    reviewsService;
    constructor(booksService, reviewsService) {
        this.booksService = booksService;
        this.reviewsService = reviewsService;
    }
    async onModuleInit() {
        const books = await this.booksService.findAll();
        if (books.length > 0) {
            return;
        }
        const gatsby = await this.booksService.create({
            title: 'The Great Gatsby',
            category: 'Fiction',
            price: 12.99,
            stock: 3,
        });
        const cleanCode = await this.booksService.create({
            title: 'Clean Code',
            category: 'Programming',
            price: 45.0,
            stock: 5,
        });
        const sapiens = await this.booksService.create({
            title: 'Sapiens',
            category: 'History',
            price: 18.5,
            stock: 2,
        });
        await this.reviewsService.create({
            bookId: gatsby.id,
            rating: 5,
            comment: 'A timeless classic. Beautiful prose.',
            author: 'Jane Doe',
        });
        await this.reviewsService.create({
            bookId: gatsby.id,
            rating: 4,
            comment: 'Great story, a bit slow in the middle.',
            author: 'John Smith',
        });
        await this.reviewsService.create({
            bookId: cleanCode.id,
            rating: 5,
            comment: 'Essential reading for every developer.',
            author: 'Alice Dev',
        });
        await this.reviewsService.create({
            bookId: cleanCode.id,
            rating: 4,
            comment: 'Clear and practical advice.',
            author: 'Bob Coder',
        });
        await this.reviewsService.create({
            bookId: sapiens.id,
            rating: 5,
            comment: 'Mind-blowing perspective on human history.',
            author: 'Carol Reader',
        });
    }
};
BooksModule = __decorate([
    Module({
        imports: [TypeOrmModule.forFeature([Book, Review])],
        controllers: [BooksController, ReviewsController],
        providers: [BooksService, ReviewsService],
    }),
    __metadata("design:paramtypes", [BooksService,
        ReviewsService])
], BooksModule);
export { BooksModule };
//# sourceMappingURL=books.module.js.map