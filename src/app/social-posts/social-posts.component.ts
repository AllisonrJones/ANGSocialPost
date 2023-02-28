import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {

newPost: Post = {} as Post;
@Output() NewThought= new EventEmitter<Post>();
Posts: any;


PublishThought():void{
  let thought: Post={
    title: this.newPost.title,
    thought: this.newPost.thought
  };
  this.NewThought.emit(thought);
}
}
