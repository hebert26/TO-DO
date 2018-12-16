import { Observable, of } from 'rxjs';
// tslint:disable-next-line:class-name
export class fakeHttpService {
    static post(error): Observable<any> {
        console.log('Error sent to the server: ', error);
        return of(error);
    }
}
