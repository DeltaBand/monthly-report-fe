import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable } from 'rxjs';

export class BaseService {
  constructor(private _httpClient: HttpClient) {}

  protected _getAll<T>(path: string): Observable<Array<T>> {
    const fullPath = environment.api.monthlyReportApi + path;
    return this._httpClient.get<Array<T>>(fullPath).pipe(
      catchError((error) => {
        console.log('Error getting entity list at path [', fullPath, ']: ', error);
        throw error;
      })
    );
  }

  protected _getById<T>(path: string): Observable<T> {
    const fullPath = environment.api.monthlyReportApi + path;
    return this._httpClient.get<T>(fullPath).pipe(
      catchError((error) => {
        console.log('Error getting entity at path [', fullPath, ']: ', error);
        throw error;
      })
    );
  }

  protected _create<T>(path: string, entity: T): Observable<T> {
    const fullPath = environment.api.monthlyReportApi + path;
    return this._httpClient.post<T>(fullPath, entity).pipe(
      catchError((error) => {
        console.error('Error posting entity of type: [', typeof entity, '] to path [', fullPath, ']: ', error);
        throw error;
      })
    );
  }

  protected _update<T>(path: string, entity: T): Observable<T> {
    const fullPath = environment.api.monthlyReportApi + path;
    return this._httpClient.put<T>(fullPath, entity).pipe(
      catchError((error) => {
        console.error('Error updating entity of type: [', typeof entity, '] at path [', fullPath, ']: ', error);
        throw error;
      })
    );
  }
}
