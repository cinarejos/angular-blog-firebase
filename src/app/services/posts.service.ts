import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';

import * as firebase from 'firebase';

import { DataSnapshot } from '@firebase/database-types';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
   
  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
    }

  getPosts() { 
   firebase.database().ref('/posts')
           .on('value', (data: DataSnapshot) => {
            this.posts = data.val() ? data.val() : [];
            console.log(this.posts);           
            this.emitPosts();       
            }
    );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }
 
  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
  
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }
}   


