import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  create(createEnrollmentDto: CreateEnrollmentDto) {
    return this.prisma.enrollment.create({ data: createEnrollmentDto });
  }

  findAll() {
    return this.prisma.enrollment.findMany({ where: { status: 'ACTIVE' } });
  }

  findOne(enrollmentId: string) {
    return this.prisma.enrollment.findUnique({ where: { enrollmentId } });
  }

  update(enrollmentId: string, updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.prisma.enrollment.update({
      where: { enrollmentId },
      data: updateEnrollmentDto,
    });
  }

  remove(enrollmentId: string) {
    return this.prisma.enrollment.delete({ where: { enrollmentId } });
  }
}
