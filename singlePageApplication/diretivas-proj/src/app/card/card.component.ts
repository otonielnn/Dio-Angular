import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos:string[] = [];
  menuType:string = "user";

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "webcam",
      "monitor"
    ]
  }

  ngOnInit(): void {

  }

  adicionar() {
    this.produtos.push("otoniel")
  }

  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
