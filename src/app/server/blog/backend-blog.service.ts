import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class BackendBlogService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let blogList = [
            { id: 1, name: "George", message: "Greeting, I is better in today" },
            { id: 2, name: "George", message: "Greeting, I is better in today" },
            { id: 3, name: "George", message: "Greeting, I is better in today" },
            { id: 4, name: "George", message: "Greeting, I is better in today" },
            { id: 5, name: "George", message: "Greeting, I is better in today" },
        ];
        return { blogList }
    }
}