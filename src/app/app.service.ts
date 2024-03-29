import { Post } from './post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  'providedIn': 'root'
})
export class AppService {
 constructor(public http: HttpClient){

 }

 getData(){
  //  return this.http.get('https://jsonplaceholder.typicode.com/posts');

  // return this.http.get('https://jsonplaceholder.typicode.com/posts',{observe:'response'});

  return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts');

 }


}
