import { ApiProperty } from '@nestjs/swagger';
import { Course } from '@prisma/client';

export class CourseEntity implements Course {
  @ApiProperty()
  cid: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
