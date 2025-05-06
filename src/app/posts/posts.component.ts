import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../posts.service';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostsComponent, CommonModule, FormsModule],
  template: ` <ul> 
  <li *ngFor='let post of posts'>{{post.title}}</li></ul>`,
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts : Post[] =[];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data=>{
      this.posts = data;

    });
  }
}
