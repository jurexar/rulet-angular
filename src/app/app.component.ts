import { Component, OnInit } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';
import { min } from 'rxjs/operator/min';
import { player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerArray:| player[] = [
    {id: 1, name: "alejandro", Money: 10000, Bet:900, color: "Rojo"},
    {id: 2, name: "mariana", Money: 10000, Bet:1000, color: "Verde"},
    {id: 3, name: "leonardo", Money: 10000, Bet:800, color: "Negro"},
  ];

  selectedplayer: player = new player ();

  editar(player: player){
    this.selectedplayer = player;

  }

  add(){
    if(this.selectedplayer.id === 0){
      this.selectedplayer.id = this.playerArray.length + 1;
      this.selectedplayer.Money = 10000;

      this.playerArray.push(this.selectedplayer);
    }
    

    this.selectedplayer= new player();
  }

  delete(){
    this.playerArray = this.playerArray.filter(x => x != this.selectedplayer);
    this.selectedplayer= new player();
  }
  segundos: number = 180;
  Min: number;
  Sec: number;
  dec: number;
  seg: number;
  resultado: string;
  tiempo(){
    this.segundos=this.segundos-1
    if (this.segundos===0){
      this.segundos=180
    }
    this.Min=Math.trunc(this.segundos/60)
    this.Sec=this.segundos-(Math.trunc(this.segundos/60)*60)
    this.dec=(Math.trunc(this.Sec/10))
    this.seg=this.Sec-(Math.trunc(this.Sec/10)*10)
    if (this.segundos===30){
      for (var i = 0; i < this.playerArray.length; i++) {
        if(this.playerArray[i].Money<=1000){
          this.playerArray[i].Bet = this.playerArray[i].Money
          this.playerArray[i].Money = 0
        }
        if(this.playerArray[i].Money>1000){
          this.playerArray[i].Bet = Math.trunc(this.playerArray[i].Money * ((Math.random() * (0.15 - 0.08 )) + 0.08));
          this.playerArray[i].Money = this.playerArray[i].Money - this.playerArray[i].Bet
        }
        
        this.col  = Math.trunc(Math.random() * 100)
        if (this.col > 50){
          this.playerArray[i].color = "Negro"
        }
        if (this.col < 3){
          this.playerArray[i].color = "Verde"
        }
        if( 2 < this.col && this.col < 51){
          this.playerArray[i].color = "Rojo"
        }
        
       }
      
    }
    
    if (this.segundos===0){
      this.col  = Math.trunc(Math.random() * 100)
      if (this.col > 50){
        this.resultado = "Negro"
      }
      if (this.col < 3){
        this.resultado = "Verde"
      }
      if( 2 < this.col && this.col < 51){
        this.resultado = "Rojo"
      }
      for (var i = 0; i < this.playerArray.length; i++) {
        if(this.playerArray[i].color === this.resultado){
          if(this.playerArray[i].color === "Verde"){
            this.playerArray[i].Money = this.playerArray[i].Money + (this.playerArray[i].Bet * 15)
          }
          if(this.playerArray[i].color != "Verde"){
            this.playerArray[i].Money = this.playerArray[i].Money + (this.playerArray[i].Bet * 2)
          }
        }
      }

    }

  }
  ngOnInit(){
    this.tiempo()
    setInterval(() => { this.tiempo(); }, 1000);
  }
  col:number;
  prueba(){
    for (var i = 0; i < this.playerArray.length; i++) {
      if(this.playerArray[i].Money<=1000){
        this.playerArray[i].Bet = this.playerArray[i].Money
        this.playerArray[i].Money = 0
      }
      if(this.playerArray[i].Money>1000){
        this.playerArray[i].Bet = Math.trunc(this.playerArray[i].Money * ((Math.random() * (0.15 - 0.08 )) + 0.08));
        this.playerArray[i].Money = this.playerArray[i].Money - this.playerArray[i].Bet
      }
      
      this.col  = Math.trunc(Math.random() * 100)
      if (this.col > 50){
        this.playerArray[i].color = "Negro"
      }
      if (this.col < 3){
        this.playerArray[i].color = "Verde"
      }
      if( 2 < this.col && this.col < 51){
        this.playerArray[i].color = "Rojo"
      }
      
     }
     this.col  = Math.trunc(Math.random() * 100)
     if (this.col > 50){
       this.resultado = "Negro"
     }
     if (this.col < 3){
       this.resultado = "Verde"
     }
     if( 2 < this.col && this.col < 51){
       this.resultado = "Rojo"
     }
     for (var i = 0; i < this.playerArray.length; i++) {
       if(this.playerArray[i].color === this.resultado){
         if(this.playerArray[i].color === "Verde"){
           this.playerArray[i].Money = this.playerArray[i].Money + (this.playerArray[i].Bet * 15)
         }
         if(this.playerArray[i].color != "Verde"){
           this.playerArray[i].Money = this.playerArray[i].Money + (this.playerArray[i].Bet * 2)
          }
        }
      }
}
}