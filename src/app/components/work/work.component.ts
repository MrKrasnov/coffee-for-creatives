import { Component, OnInit } from '@angular/core';
import { FrontendBlogService } from 'src/app/server/blog/frontend-blog.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.sass']
})
export class WorkComponent implements OnInit {

  constructor(private db: FrontendBlogService) { }

  addBlog(name: string, message: string): void {
    let randomInt = (): number => Math.floor(Math.random() * 1000);
    this.db.addItem({ id: randomInt(), name: name, message: message }).subscribe()
  }

  ngOnInit(): void {
  }

}
