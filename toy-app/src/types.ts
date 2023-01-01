import { ApiProperty } from '@nestjs/swagger';

export class Patient {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;
}