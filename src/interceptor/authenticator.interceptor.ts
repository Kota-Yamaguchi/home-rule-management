import { CallHandler, ExecutionContext, Injectable, NestInterceptor, UnauthorizedException } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthenticatorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()
    const token = request.headers['authorization']
    const valid = checkToken(token)
    return next.handle().pipe(
      map((data) => {
        if (!valid) throw new UnauthorizedException()
        return data
      })
    )
  }
}

function checkToken(token: any) {
  return true
}

