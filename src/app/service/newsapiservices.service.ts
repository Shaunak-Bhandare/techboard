import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsApiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c50b779b4bcf4a52b2dec10a350bd39c"

  // technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c50b779b4bcf4a52b2dec10a350bd39c";

  // businessapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c50b779b4bcf4a52b2dec10a350bd39c";

  // sportsapiurl
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c50b779b4bcf4a52b2dec10a350bd39c";
  
  // sportsapiurl
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c50b779b4bcf4a52b2dec10a350bd39c";

  // topHeading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  // technews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  // businessnews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

  // sportsnews()
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }

  // entertainmentnews()
  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl);
  }
}
