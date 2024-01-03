import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  // use the Reflector to retrieve the roles metadata set by the @Roles() decorator and then determine if the user has the required roles
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'role',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true; // If no roles are required, everyone is allowed
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // The JWT strategy would deserialize the user from the token and attach the user object with roles to the request.user property.

    return requiredRoles.some((role) => user.role?.includes(role));
  }
}
