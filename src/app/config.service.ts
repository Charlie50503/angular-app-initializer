import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ConfigModel } from './config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config!: ConfigModel | undefined;
  get config() { return this._config; }

  constructor(private http: HttpClient) { }

  async load(): Promise<void> {
      const data = await lastValueFrom(this.http.get<ConfigModel>('https://jsonplaceholder.typicode.com/users/1'))
      console.log(data);

      this._config = data
  }
}
