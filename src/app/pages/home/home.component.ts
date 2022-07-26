import { Component } from '@angular/core';
import { Router } from '@angular/router'; // import router from angular router
import { Subscription, Observable, of } from 'rxjs';
import { PostsService } from '../../services/posts/post.service';
import { Posts } from '../../model/posts';
import { Loading } from '../../services/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private route: Router,
    public posts: PostsService,
    public loading: Loading
  ) {}
  userName: string = localStorage.getItem('user');
  post$: Subscription;
  offSet: number = 0;
  data: Posts[];
  ngOnInit(): void {
    this.handleGetPosts();
  }
  handleGetPosts(): void {
    this.post$ = this.posts.getPosts(this.offSet).subscribe((value) => {
      this.data ? (this.data = this.data.concat(value)) : (this.data = value);
    });
    this.offSet++;
  }

  handleLogout(): void {
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }
  ngOnDestroy() {
    this.post$ && this.post$.unsubscribe();
  }
}
