import { Component, OnInit } from '@angular/core';
import { KomentaraiService } from '../komentarai.service';
import { Komentaras } from '../komentaras.model';

@Component({
  selector: 'app-komentarai',
  templateUrl: './komentarai.component.html',
  styleUrls: ['./komentarai.component.css']
})
export class KomentaraiComponent implements OnInit {

  public komentarai:Komentaras[]=[];

  constructor( private komentaraiService:KomentaraiService ) { }

  ngOnInit(): void {
    this.loadKomentarai();
  }

  send(email:string, text:string){
    this.komentaraiService.postKomentaras(email,text);
  }

  loadKomentarai(){
    this.komentaraiService.getKomentarai().subscribe((data)=>{
      console.log(data);
    });
  }

}
