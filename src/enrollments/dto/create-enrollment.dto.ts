import { IsString, IsDate, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { EnrollmentStatus } from '@prisma/client';

export class CreateEnrollmentDto {
  @ApiProperty({ description: 'ID of the user being enrolled' })
  @IsString()
  userId: string;

  @ApiProperty({ description: 'ID of the course to enroll in' })
  @IsString()
  courseId: string;

  @ApiProperty({
    description: 'Date of enrollment',
    type: 'string',
    format: 'date-time',
  })
  @IsDate()
  enrollDate: Date;

  @ApiProperty({
    description: 'Status of the enrollment',
    enum: EnrollmentStatus,
  })
  @IsEnum(EnrollmentStatus)
  status: EnrollmentStatus;
}
