import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  
  @Get()
  getAllPosts() {
    return "all posts";
  }
}
