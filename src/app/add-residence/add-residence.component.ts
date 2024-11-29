import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Residence } from '../core/models/Residence';
import { ActivatedRoute } from '@angular/router';
import { ListOfResidencesService } from '../list-of-residences.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  idR!:number;
  residenceForm!: FormGroup;
  residence!:Residence;
  constructor(private fb: FormBuilder,private act:ActivatedRoute,private listRes:ListOfResidencesService) {}
  ngOnInit(): void {
   this.idR= this.act.snapshot.params['id'];
    this.initializeForm();
    if(this.act.snapshot.routeConfig?.path=="update-residence/:id"){
      this.residence=this.listRes.listResidences.find(res=>res.id==this.idR)!;
      this.residenceForm.patchValue({...this.residence});
    }
  }

  private initializeForm(): void {
    this.residenceForm = this.fb.group({
      id: [null],
      name: [''],
      address: [''],
      image: [''],
      status: [''],
    });

   
  }

  onSubmit() {
    if (this.act.snapshot.routeConfig?.path === "update-residence/:id") {
      const residenceList = this.listRes.listResidences;
      const index = residenceList.findIndex(res => res.id === this.residence.id);
  
      if (index !== -1) {
        residenceList[index] = { ...this.residenceForm.value };
      } else {
        console.error("Residence not found for update");
      }
    } else {
      this.listRes.listResidences.push({ ...this.residenceForm.value });
    }
  
    console.log(this.listRes.listResidences);
  }
  


}
