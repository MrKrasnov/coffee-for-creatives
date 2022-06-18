import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class BackendBlogService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let blogList = [
            { id: 1, name: "George", message: "I is better in today" },
            { id: 2, name: "George", message: "I draw a picture" },
            { id: 3, name: "George", message: "It's cool. I will continue" },
            { id: 4, name: "George", message: "Maybe, Must I buy some of sugar?" },
            { id: 5, name: "George", message: "Greed punished me" },
        ];
        return { blogList }
    }
}