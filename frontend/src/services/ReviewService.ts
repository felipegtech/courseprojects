import type { ReviewInterface } from '@/interfaces/ReviewInterface';
import { useReviewStore } from '@/stores/reviewStore.js';
import { nextId } from '@/utils/nextId.js';

export class ReviewService {
  static getReviews(): ReviewInterface[] {
    return useReviewStore().reviews;
  }

  static getReviewsByBookId(bookId: number): ReviewInterface[] {
    return useReviewStore().reviews.filter((review) => review.bookId === bookId);
  }

  static createReview(review: Omit<ReviewInterface, 'id'>): void {
    const store = useReviewStore();
    store.reviews.push({
      id: nextId(store.reviews),
      ...review,
      createdAt: new Date().toISOString(),
    });
  }
}
