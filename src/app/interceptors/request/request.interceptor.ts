import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request)
    request = request.clone({
      setHeaders: {
        'Accept-Encoding': 'gzip',
      },
      setParams: {
        ts: environment.marvelEndpointTimestamp,
        apikey: environment.marvelEndpointApiKey,
        hash: environment.marvelEndpointHash,
      },
      url: environment.marvelEndpoint + request.url,
    })

    return next.handle(request)
  }
}
