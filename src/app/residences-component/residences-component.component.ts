import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
 
  styleUrl: './residences-component.component.css'
})
export class ResidencesComponentComponent implements OnInit{

  searchAdd:string ='';
  listResidences:Residence[]=[
       {id:1,name: "El fel",address:"Borj Cedria", image:"../../assests/image/image.png", status: "Disponible"},
        {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/Résidence-Tourisme-Piscine.png", status: "Disponible" },
        {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
        {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
      ];
    residencesLike:Residence[]=[];
  ngOnInit(): void {
    
  }

  public constructor(){

  }
    
  public showLocation(add : string) :any {
    if(add==="inconnu"){
      window.alert("l’adresse de cette résidence est inconnu");
    }else{
      window.alert(add);
    }
  }

  likeRes(res: Residence) {
    this.residencesLike.push(res);
    console.log(this.residencesLike);
  }

}
