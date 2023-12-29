import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  accessToken: string;
  id?: string;
  email?: string;
  userName?: string;
  role?: string;
}
