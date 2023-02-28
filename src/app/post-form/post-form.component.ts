import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{
Posts: Post[]=[];
addPost(newthought:Post){
  this.Posts.push(newthought);
}
}
