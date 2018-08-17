import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {fname:"", lname:"", email:"", wallet_address:"", password:"", password_confirmation: ""};
  responsemodel:any;
  myResponseModel:any;
  constructor(private http: Http,
  			  private route: ActivatedRoute,
        	  private router: Router) { }

  ngOnInit() {
  }

/* Function is used for to register new user */
fnUserSave(form){
   if(form.valid){
       //let headers = new Headers({ 'Content-Type': 'application/json' });
		const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
		let options = new RequestOptions({ headers: headers });

		let body = {
			name : this.user.fname,
			last_name : this.user.lname,
			wallet : this.user.wallet_address,
			email : this.user.email,
			password : this.user.password,
      password_confirmation: this.user.password_confirmation
		}
 		//alert(JSON.stringify(body));
 		return this.http.post('/register', body,options)
		.subscribe(
                data => {
                	alert("Register Successfuly");
                	this.router.navigate(['login']);
                },
                error => {
                   alert("Server down....");
                });

    }else{
        alert("Please fill all fields");
    }
 }

}
