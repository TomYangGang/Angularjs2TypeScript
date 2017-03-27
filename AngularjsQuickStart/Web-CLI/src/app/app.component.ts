import {Component,OnInit,Injectable} from '@angular/core';
import {LoginUser} from "./appglobal/loginUser";

import {LocalStorageService} from "angular-2-local-storage";
import {RouterModule,ActivatedRoute,Router} from '@angular/router';
import {AuthenticateService} from "./appglobal/authenticate.service";
import {LoginForm} from "./Login/loginForm";
import {AlertModule } from "ng2-bootstrap/alert";
import {AlertService} from "./appglobal/alert.service"
import {AlertMessage} from "./appglobal/AlertMessage";


@Injectable()
@Component({
    selector:'my-app',
    templateUrl:'app.component.html',
})

export class AppComponent implements OnInit{

  loginUser:LoginUser={    Id:0,    Name:"",    Email:"",    AuthToken:"",    IsLogin:false  };
  alertMessage={    timeout:0,    type:"",    msg:""  } as AlertMessage;
  loginForm:LoginForm={Email:"test@test.com",Password:"Password1"} as LoginForm;
  constructor(
    private localStorageService:LocalStorageService,
    private router:Router,
    private authService:AuthenticateService,
    private alertService:AlertService
  ){}

  ngOnInit(): void {
    this.initLoginUser()
  }

  initLoginUser():void{
      let userCookie=this.localStorageService.get("loginUser");
      if(userCookie==null){
        this.router.parseUrl("/heroes")
      }else{
        this.loginUser=userCookie as LoginUser;
        this.loginUser.IsLogin=true;
      }
  }

  login():void{
    this.authService.login(this.loginForm).then(response=>this.loginSuccess(response));
  }

  loginSuccess(response){
    this.localStorageService.set("loginUser", response);
    this.loginUser=response as LoginUser;
    this.loginUser.IsLogin=true;
    let message=this.alertService.successMessage()
    this.alertMessage=message as AlertMessage;
    this.router.navigateByUrl("/heroes");
  }

  logout(){
    console.log("logout success!");
    this.loginUser.IsLogin=false;
    this.localStorageService.remove("loginUser");
    this.router.navigate(['/heroes']);
  }

}
