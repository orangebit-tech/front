import { Team } from './../models/team.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team: Team[] = [
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader'),
    new Team('Yogesh more', 'https://crm.audio/wp-content/uploads/2018/04/Developer-732x411.jpeg', 'Team Leader')
  ];
  constructor() { }

  ngOnInit() {
  }

}
