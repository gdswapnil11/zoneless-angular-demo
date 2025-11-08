import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Zoneless Angular Demo');

  postsService = inject(PostsService);
  searchText = signal('');
  pageSize = signal(10);

  filteredPosts = computed(() => {
    const term = this.searchText().toLowerCase().trim();
    const posts = this.postsService.posts();
    if (!term) return posts;
    return posts.filter(p => p.title.toLowerCase().includes(term));
  });

  constructor() {
    // load initial posts using the default page size from this component
    this.postsService.reload(this.pageSize());
  }
  
}
