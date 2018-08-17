import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  amount:any;
  constructor(private http: Http,
  			  private route: ActivatedRoute,
        	  private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  private getUser(){
    return this.http.get('/api/user').subscribe(
      data => console.log(data.json()),
      err => console.error(err)
    )
  }


}
