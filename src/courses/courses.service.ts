import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({ data: createCourseDto });
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(cid: string) {
    return this.prisma.course.findUnique({ where: { cid } });
  }

  update(cid: string, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { cid },
      data: updateCourseDto,
    });
  }

  remove(cid: string) {
    return this.prisma.course.delete({ where: { cid } });
  }
}
