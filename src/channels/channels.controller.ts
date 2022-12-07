import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get(':name')
  getSpecificChannel() {}

  @Get()
  getAllChannel() {}

  @Post()
  createChannel() {}

  @Get(':name/chats')
  getName(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':name/chats')
  postName(@Body() body) {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers(@Body() body) {}
}
