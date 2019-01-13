import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { WebConstantService } from './web.constant.service';
import { AlertService } from './alert.service';
import {catchError} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Router } from '@angular/router';
import { log } from 'util';


@Injectable()
export class BaseHttpServoce{
    constructor(private httpClient: HttpClient,
        private alertService:AlertService,
        private router:Router,
        private webConstantService:WebConstantService){       
    }

    private headerOptions = new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Access-Control-Allow-Origin',
        'Authorization': 'Bearer '+  JSON.parse(localStorage.getItem(this.webConstantService.localStoreKey)).token
    });
    
    getAll (url:string, data?:Object,):Observable<Object> {
        return this.httpClient.get(this.webConstantService.rootUrl+url,{headers:this.headerOptions}).pipe(
            catchError(error=>this.handleError(error))  
        );
    }

    post (url:string, data?:any,) :Observable<any>{
        return this.httpClient.post(this.webConstantService.rootUrl+url,data ,{headers:this.headerOptions})
        .pipe(
            catchError(error=>this.handleError(error))  
        );

    }

    handleError(error: any): any {          
        if(error.status===401){            
            localStorage.removeItem(this.webConstantService.localStoreKey);
            this.router.navigate(["/login"]);
        }else if(error.status===404){
            this.alertService.error("404");           
        }else{

            this.alertService.error(error.message);
        }

    }


}