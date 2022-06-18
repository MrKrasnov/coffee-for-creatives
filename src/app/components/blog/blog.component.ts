import { Component, OnInit } from '@angular/core';
import { FrontendBlogService } from 'src/app/server/blog/frontend-blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  bloglist: any;
  constructor(private blogs: FrontendBlogService) { }

  ngOnInit(): void {
    this.blogs.getItems().subscribe(data => {
      this.bloglist = data;
    });
  }

}
