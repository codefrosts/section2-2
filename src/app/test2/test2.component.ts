import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  value: string;

  get categories(): Observable<string[]> {
    return this.categoryService.categories;
  }

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe();
  }

  filterCategory(): void {
    this.categoryService.getCategories(this.value).subscribe();
  }

}
