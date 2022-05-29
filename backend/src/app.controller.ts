import { Body, Controller, Delete, Get, Post, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "ok";
  }

  @Post()
  createMockTimeSeries(@Body('sampleRate') a: number, @Body('duration') b: number){
    this.appService.getMockTimeSeries(a,b);
  }

  @Delete()
  deleteMockTimeSeries(){
    return this.appService.deleteMockTimeSeries();
  }

}
