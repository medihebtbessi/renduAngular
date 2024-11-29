import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ListOfResidencesService } from '../list-of-residences.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {

  constructor(private listRes:ListOfResidencesService){}

  search_item:string="";
  listResidences: Residence[] = this.listRes.listResidences;
  favoris: Residence[] = [];

  showLocation(adress: string) {
    if (adress === 'inconnu') {
      alert("l'adresse est inconnu");
    } else {
      alert("l'adresse est" + adress);
    }
  }

  addFavorite(residence: Residence) {
    if (!this.favoris.includes(residence)) {
      this.favoris.push(residence);
    }
    console.log(this.favoris);
  }
filtreByAddress(){
  return this.listResidences.filter(residance=> residance.address.toLowerCase().includes(this.search_item.toLowerCase()))
}

}
