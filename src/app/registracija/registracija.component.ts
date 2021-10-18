import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  vardas:string="Jonas";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log("Submitinam formą");
    console.log(form);
    
  }
}
