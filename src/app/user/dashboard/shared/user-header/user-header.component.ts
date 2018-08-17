import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserHeaderComponent implements OnInit {
  amount:any;
  body:any;
  constructor(private http: Http,
  			  private route: ActivatedRoute,
        	  private router: Router) { }

  ngOnInit() {
  	this.fnLoadMe();
  }


fnLoadMe(){
	const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
		let options = new RequestOptions({ headers: headers });
		//let wallet_address = localStorage.getItem(wallet_address);
	return this.http.get('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x85f171847f04eae21f8036dac40c544b8de1059a&address=0xA1D96cbf35C2f7371245d28161B133aD510f5489&tag=latest&apikey=GUXAFR2J2VEWXDJINH8YC7VY1Z5WQB4IGU ', options)		
		
		.subscribe(
                (data) => { 
                	if(data){
                	//console.log("body-j",data.json());                
                	this.body = data.json();
                	//this.amount = JSON.parse(data._body);
                	this.amount = this.body.result;
                	//console.log("Amount",this.amount);
                	//alert(this.amount);
                	this.router.navigate(['dashboard']);   
                	}             	
                },
                error => {
                    alert("Server Down");
                });
}
}
