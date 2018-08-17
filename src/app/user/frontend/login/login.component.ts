import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user = {email:"", password:""};
  responsemodel:any;
  requestData:any;
  public isLogin:boolean;

  constructor(private http: Http,
  			  private route: ActivatedRoute,
        	  private router: Router) {
  	this.isLogin = false;
  	//alert(this.isLogin);
  }

  ngOnInit() {
  }


/* Function is used for to register new user */
fnDoLogin(form){
   if(form.valid){
       const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
		let options = new RequestOptions({ headers: headers });
		let body = {
			"email":this.user.email,
			"password":this.user.password
		}

 //alert(JSON.stringify(body));
 return this.http.post('/login', body,options)
		.subscribe(
                data => {
                  console.log('data', data);
                	//console.log("body",data._body);
                	this.isLogin = true;
                	// this.requestData = data.json();
                	//this.requestData = JSON.parse(data._body);
                	//this.isLogin = this.isLogin.message;
                	// console.log("data",this.requestData);
                	// localStorage.setItem('wallet_address',this.requestData.response.wallet)
                	// alert(this.requestData.response.wallet);
                	alert("Login Successfuly");
                	this.router.navigate(['dashboard']);
                },
                error => {
                    alert("Server Down");
                });

    }else{
        alert("Please fill all fields");
    }
 }

}
