import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Post } from '../models/post.models';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rout',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
 
  postForm: FormGroup;
    

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) { }
           
  
  ngOnInit() {
    this.initForm();
  }
 
  initForm() {
      this.postForm = this.formBuilder.group({ 
      title: ['', Validators.required],
      content: ['', Validators.required],
      createdAt: [null],
      time: [null],
      loveIt: [0],
      dontLoveIt: [0],
 
    });
  }
  
  onCreatePost() {    
      const title= this.postForm.get('title').value;
      const content= this.postForm.get('content').value;
      
      const createdAt = new Date().toDateString();
      const time = new Date().toISOString();

      const loveIt= this.postForm.get('loveIt').value;
      const dontLoveIt= this.postForm.get('dontLoveIt').value;  
          
      const newPost = new Post(title, content, createdAt, time, loveIt, dontLoveIt);
           
      this.postsService.createNewPost(newPost);
      this.router.navigate(['/posts']);
  }
}

