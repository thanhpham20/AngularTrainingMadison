import { Injectable } from '@angular/core';
import { ServerHttpService } from '../../config/server-http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../model/posts';
import { delay, tap } from 'rxjs/operators';
import { Loading } from '../../services/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private server: ServerHttpService,
    private http: HttpClient,
    public loading: Loading
  ) {}
  public getPosts(page: number, limit: number = 2): Observable<Posts[]> {
    return this.http.get<Posts[]>(
      `${this.server.REST_API_SERVER}/posts?_page=${page}&_limit=${limit}`
    );
    // .pipe(delay(3000));
  }
}
