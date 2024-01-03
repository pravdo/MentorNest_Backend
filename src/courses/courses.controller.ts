import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseEntity } from './entities/course.entity';
import { RolesGuard } from './guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from './decorators/roles.decorator';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @ApiCreatedResponse({ type: CourseEntity })
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin')
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOkResponse({ type: CourseEntity, isArray: true })
  async findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CourseEntity })
  async findOne(@Param('id') id: string) {
    const course = await this.coursesService.findOne(id);
    if (!course) {
      throw new NotFoundException(`Course with ${id} does not exist`);
    }
    return course;
  }

  @Patch(':id')
  @ApiOkResponse({ type: CourseEntity })
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin')
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CourseEntity })
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Roles('admin')
  async remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
