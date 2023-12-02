import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CoursesModule,
    EnrollmentsModule,
    AuthModule,
    ConfigModule.forRoot({ envFilePath: '../.env' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
