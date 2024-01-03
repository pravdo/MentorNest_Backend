import { SetMetadata } from '@nestjs/common';

// decorator uses SetMetadata to associate the roles metadata with the route handler
export const Roles = (...role: string[]) => SetMetadata('role', role);
