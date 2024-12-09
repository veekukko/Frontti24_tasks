import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root',
})
export class FinnkinoService {
  private apiBaseUrl = 'https://www.finnkino.fi/xml/';

  constructor(private http: HttpClient) {}

  // XML data from Finnkino
  fetchData(endpoint: string): Observable<any> {
    const url = `${this.apiBaseUrl}${endpoint}`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((xml) => this.convertXmlToJson(xml))
    );
  }

  // XML to JSON
  private convertXmlToJson(xml: string): any {
    let jsonResult: any;
    xml2js.parseString(xml, { explicitArray: false }, (err, result) => {
      if (err) {
        throw new Error('Error parsing XML: ' + err);
      }
      jsonResult = result;
    });
    return jsonResult;
  }
}
