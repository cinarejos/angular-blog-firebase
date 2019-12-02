import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;
  @Input() postTime: number;
  @Input() postLoveIt: number;
  @Input() postDontLoveIt: any;
  @Input() post: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }
  
  onLoveIt() {
    this.postLoveIt++;
    this.post.loveIt = this.postLoveIt;
    this.postService.savePosts();
  }

  onDontLoveIt() {
    this.postDontLoveIt++;
    this.post.dontLoveIt = this.postDontLoveIt;
    this.postService.savePosts();
  }

  onDeletePost(post: Post) {
    const confirmation = confirm('Confirmez-vous la suppression de ce post?');
    if (confirmation) {
      this.postService.removePost(post);
    }
  }
}
