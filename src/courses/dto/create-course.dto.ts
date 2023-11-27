import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @MinLength(5)
  @ApiProperty()
  name: string;

  @IsString()
  @MinLength(25)
  @ApiProperty()
  description: string;
}
