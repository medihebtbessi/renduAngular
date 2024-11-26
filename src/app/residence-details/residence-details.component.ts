import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  idR!:number;
  constructor(private act:ActivatedRoute){}

  ngOnInit(){
    this.idR=this.act.snapshot.params['id'];
  }


}
