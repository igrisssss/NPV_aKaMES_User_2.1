import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class CrudInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = (new Date()).getTime();
    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    return next.handle(request).pipe(map(event => {
      if (event instanceof HttpResponse) {
        const endTime = (new Date).getTime();
        const responseTime = endTime - startTime;
        console.log(`${event.url} succeed in ${responseTime} ms`)
      }
      return event;
    }));
  }
}