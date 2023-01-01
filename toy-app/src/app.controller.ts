import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {run} from './mongo';
import {Patient} from './types';
import {ApiOkResponse} from '@nestjs/swagger';

@Controller('patients')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({description: 'The patient records',
  type: Patient,
  isArray: true})
  @Get()
  async getHello(): Promise<Patient[]> {
    const patients = await run().catch(console.dir);
    if(patients){
    return patients;
    }
  }
}
