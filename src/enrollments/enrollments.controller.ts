import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { EnrollmentEntity } from './entities/enrollment.entity';

@Controller('enrollments')
@ApiTags('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Post()
  @ApiCreatedResponse({ type: EnrollmentEntity })
  async create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return new EnrollmentEntity(
      await this.enrollmentsService.create(createEnrollmentDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: EnrollmentEntity, isArray: true })
  async findAll() {
    const enrollments = await this.enrollmentsService.findAll();
    return enrollments.map((enrollment) => new EnrollmentEntity(enrollment));
  }

  @Get(':id')
  @ApiOkResponse({ type: EnrollmentEntity })
  async findOne(@Param('id') id: string) {
    return new EnrollmentEntity(await this.enrollmentsService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: EnrollmentEntity })
  async update(
    @Param('id') id: string,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    return new EnrollmentEntity(
      await this.enrollmentsService.update(id, updateEnrollmentDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: EnrollmentEntity })
  async remove(@Param('id') id: string) {
    return new EnrollmentEntity(await this.enrollmentsService.remove(id));
  }
}
