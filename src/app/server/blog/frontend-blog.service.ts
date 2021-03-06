import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FrontendBlogService {
    constructor(private http: HttpClient) { }
    getItems() {
        return this.http.get('api/blogList');
    }
    addItem(newpost: object) {
        return this.http.post('api/blogList', newpost);
    }
}