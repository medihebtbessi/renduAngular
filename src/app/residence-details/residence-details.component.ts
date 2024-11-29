import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ListOfResidencesService } from '../list-of-residences.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit{
  idR!:number;
  residence!:Residence;
  constructor(private act:ActivatedRoute,private listRes:ListOfResidencesService){}

  ngOnInit(){
    this.idR=this.act.snapshot.params['id'];
   this.getDetails();
  }

  public getDetails():void{
    this.residence=this.listRes.listResidences.find(res=> res.id==this.idR)!;
    console.log(this.residence)
  }
  



}
