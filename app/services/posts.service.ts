import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private readonly apiBase = 'https://jsonplaceholder.typicode.com/posts';

  private readonly postsSignal = signal<any[]>([]);
  readonly posts = this.postsSignal; // expose publicly (readonly reference)
  private loadingSignal = signal(false);
  readonly loading = this.loadingSignal;
  private errorSignal = signal<string | null>(null);
  readonly error = this.errorSignal;

  private pageSize = signal(10);

  constructor(private http: HttpClient) {
    this.load();
  }

  private load() {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    const url = `${this.apiBase}?_limit=${this.pageSize()}`;

    this.http
      .get<any[]>(url)
      .pipe(
        catchError(() => {
          this.errorSignal.set('Failed to load posts');
          return of([] as any[]);
        }),
        finalize(() => this.loadingSignal.set(false))
      )
      .subscribe(data => this.postsSignal.set(data));
  }

  /**
   * Reload posts. If `size` is provided it updates the page size then reloads.
   */
  reload(size?: number) {
    if (typeof size === 'number' && size > 0) {
      this.pageSize.set(size);
    }
    this.load();
  }
}
