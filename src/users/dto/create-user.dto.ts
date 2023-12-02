import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty()
  lastName: string;

  @IsEnum(UserRole)
  @IsNotEmpty()
  @ApiProperty({ required: false, enum: ['ADMIN', 'BASIC'], default: 'BASIC' })
  role: string = 'BASIC';
}
