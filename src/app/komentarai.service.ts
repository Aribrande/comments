import { Injectable } from "@angular/core";
import { TestasService } from "./testas.service";
import { HttpClient } from "@angular/common/http"
import { Komentaras } from "./komentaras.model";
import { Observable, Subscription } from "rxjs";

@Injectable({providedIn:'root'})
export class KomentaraiService{

    constructor (private http:HttpClient){

    }

    getKomentarai(){
        return this.http.get("https://komentarai-47ca9-default-rtdb.europe-west1.firebasedatabase.app/komentarai.json");
    }

    postKomentaras(email:string, text:string){
        const komentaras:Komentaras={ email:email, text:text };

        this.http
            .post<{name:string}>("https://komentarai-47ca9-default-rtdb.europe-west1.firebasedatabase.app/komentarai.json",komentaras)
            .subscribe((response)=>{
                console.log(response);
            });
    }
}