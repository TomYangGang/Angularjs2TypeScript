import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable} from 'rxjs/observable'

import 'rxjs/add/operator/toPromise';


//Injectable 
@Injectable()
export class HeroService {
  
//todo:工厂方法注入可以研究下
  constructor(private http:Http){}

  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  getHeroesByHttp(): Promise<Hero[]> {
     const getApi=this.webApiUrl+"api/heros";  
      return this.http.get(getApi)
      .toPromise()
      .then(response=>this.returnHeros(response))
      .catch(this.handleError);     
  }

  returnHeros(response):Promise<Hero[]>{
      return response.json();

  }
  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise<Hero[]>(resolve =>setTimeout(resolve, 2000))
  //     .then(() => this.getHeroes());
  // }

  getHero(Id: number): Promise<Hero> {
    return this.getHeroesByHttp()
               .then(heroes => this.findHero(heroes,Id));
  }

  findHero(heroes,Id):Promise<Hero>{
      return heroes.find(hero => hero.Id === Id);
  }

  update(hero:Hero):Promise<Hero>{
    const url = `${this.webApiUrl}/${hero.Id}`;

    return this.http.put(this.updateHeroWebApiUrl,JSON.stringify(hero),{headers:this.headers})
             .toPromise()
             .then(()=>hero)
             .catch(this.handleError);
  }

  // create(hero:Hero):Promise<Hero>{
  //   return this.http.post(this.addHeroWebApiUrl,JSON.stringify(hero),{headers:this.headers})
  //                   .toPromise()
  //                   .then(response=>this.responseAfterCreate(response))
  //                   .catch(this.handleError)

  // }
  
  create(hero:Hero):Observable<Hero>{
    return this.http.post(this.addHeroWebApiUrl,JSON.stringify({Name:hero.Name}),{headers:this.headers})
                    .map(x=>this.extractData).share() 
                    .catch(this.handleError)
                    
  }


  responseAfterCreate(response):Promise<Hero>{
      console.log(response.json());
      return response.json();
  }
  
  delete(id:number):Promise<Hero>{
    const url = `${this.deleteHeroWebApiUrl}/${id}`;
    return this.http.delete(url,{headers:this.headers})
                    .toPromise()
                    .then(()=>null)
                    .catch(this.handleError);
  
  }
 private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private headers = new Headers({'Content-Type':'application/json'});
  private webApiUrl='http://localhost:36385/';
  private addHeroWebApiUrl=this.webApiUrl+"/api/heros/";
  private updateHeroWebApiUrl=this.webApiUrl+"/api/heros/";
  private deleteHeroWebApiUrl=this.webApiUrl+"/api/heros/";
  private handleError(error:any):Promise<any>{
    console.error("system error:", error);
    return Promise.reject(error.message || error);
  }
}