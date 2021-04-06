import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories$: Observable<any> = this.httpClient.get('https://api.publicapis.org/categories').pipe(
    shareReplay(1)
  );
  categories = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
  }

  getCategories(query: string = ''): Observable<string[]> {
    return this.categories$.pipe(
      map((results: string[]) => {
        const res = results.filter(result => result.includes(query));
        this.categories.next(res);
        return res;
      })
    );
  }
}
