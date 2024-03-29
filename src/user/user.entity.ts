import { BaseEntityClass } from 'src/base/base.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { PollAnswer } from 'src/poll/entities/poll-answer.entity';
import { Poll } from 'src/poll/entities/poll.entity';
import { UserPost } from 'src/post/post.entity';
import { PostRequest } from 'src/post_request/post-request.entity';
import { SAMPLE_DATE, SAMPLE_USER_ID } from 'src/utils';
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Entity()
export class User extends BaseEntityClass {
  @PrimaryColumn('varchar', { length: 41 })
  id: string;

  @Column('text', { nullable: true })
  avatar: string;

  @Column('varchar', { length: 32, unique: true })
  username: string;

  @Column('text', { select: false })
  password: string;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('varchar', { nullable: true })
  address: string;

  @Column('varchar', { nullable: true })
  city: string;

  @Column('varchar', { nullable: true })
  country: string;

  @Column('varchar')
  role: UserRole;

  @Column('varchar', { nullable: true })
  email: string;

  @Column('text', { nullable: true })
  organization: string;

  @OneToMany((type) => UserPost, (post) => post.owner)
  createdPosts: UserPost[];

  @OneToMany((type) => PostRequest, (post) => post.owner)
  createdPostRequest: PostRequest[];

  @ManyToMany((type) => UserPost, (post) => post.likeUser)
  likedPosts: UserPost[];

  @OneToMany((type) => Comment, (comment) => comment.owner)
  comments: Comment[];

  @ManyToMany((type) => PollAnswer, (comment) => comment.votedUser)
  votedPollAnswer: PollAnswer[];

  // @ManyToMany((type) => Poll, (poll) => poll.votedUser)
  // votedPoll: Poll[];
}
