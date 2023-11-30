import { ApiProperty } from '@nestjs/swagger';

import { Enrollment } from '@prisma/client';
import { EnrollmentStatus } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class EnrollmentEntity implements Enrollment {
  @ApiProperty({
    example: 'unique_enrollment_id',
    description: 'Unique identifier for the enrollment',
  })
  enrollmentId: string;

  @ApiProperty({
    example: 'unique_user_id',
    description: 'Unique identifier of the user',
  })
  userId: string;

  @ApiProperty({
    example: 'unique_course_id',
    description: 'Unique identifier of the course',
  })
  courseId: string;

  @ApiProperty({
    example: '2023-04-05T10:20:30Z',
    description: 'Date and time when the enrollment was created',
    type: Date,
  })
  enrollDate: Date;

  @ApiProperty({
    example: 'ACTIVE',
    description: 'Current status of the enrollment',
  })
  status: EnrollmentStatus;

  @ApiProperty({
    example: '2023-04-05T10:20:30Z',
    description: 'Date and time when the enrollment was last updated',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    example: '2023-04-05T10:20:30Z',
    description: 'Date and time when the enrollment was last updated',
    type: Date,
  })
  updatedAt: Date;

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;

  constructor(data: Partial<EnrollmentEntity>) {
    Object.assign(this, data);
    if (data.user) {
      this.user = new UserEntity(data.user);
    }
  }
}
