import { Controller, Get, Post, Param, Delete, Request } from '@nestjs/common';
import { LikeService } from './like.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthUser, Public } from 'src/auth/auth-user.decorator';
import { UserPost } from 'src/post/post.entity';
import { PostService } from 'src/post/post.service';

@ApiTags('Post API')
@Controller('post')
export class LikeController {
  constructor(
    private readonly likeService: LikeService,
    private readonly postService: PostService,
  ) {}

  @Post(':postId/like')
  like(
    @Request() request: { user: AuthUser },
    @Param('postId') postId: string,
  ): Promise<UserPost> {
    const like = this.likeService.like(request.user.id, postId);
    return like;
  }

  @Delete(':postId/unlike')
  unlikePost(
    @Request() request: { user: AuthUser },
    @Param('postId') postId: string,
  ): Promise<any> {
    const like = this.likeService.unlike(request.user.id, postId);
    return like;
  }

  @Get(':postId/like')
  @Public()
  getLikeOfPost(@Param('postId') postId: string): Promise<UserPost> {
    return this.postService.getLikesOfPost(postId);
  }
}
