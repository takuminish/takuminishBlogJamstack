import { Component, OnInit } from '@angular/core';
import { client } from 'src/environments/environment.api'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public profile: any;

  constructor() { }

  ngOnInit() {
    this.getData()
  }

  public async getData(): Promise<void> {
    const data = await client.get({
      endpoint: 'profile',
    });
    this.profile = data;
  }

}
