import {
  Body,
  Controller,
  Post,
  Request,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { BaseResponse } from 'src/base/base.dto';
import { PollService } from 'src/poll/poll.service';

@ApiTags('Poll Request API')
@Controller('poll')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @Post('')
  createPoll(@Request() request: { user: AuthUser }): Promise<any> {
    return;
  }

  @Get(':id')
  getPoll(
    @Param('id') id: string,
    @Request() request: { user: AuthUser },
  ): Promise<any> {
    return;
  }

  @Get('')
  getAllPolls(@Request() request: { user: AuthUser }): Promise<any> {
    return;
  }

  @Patch(':id')
  updatePoll(@Request() request: { user: AuthUser }, @Param('id') id: string) {
    return;
  }

  @Delete(':id')
  removePoll(@Request() request: { user: AuthUser }, @Param('id') id: string) {
    return;
  }

  @Post(':pollId/vote/:voteId')
  vote(
    @Request() request: { user: AuthUser },
    @Param('pollId') pollId: string,
    @Param('voteId') voteId: string,
  ): BaseResponse {
    return new BaseResponse(200, 'Vote successfully');
  }
}
