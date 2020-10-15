import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Button } from "protractor";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent implements OnInit {
  exibir: boolean = false;
  abrirContador() {
    this.exibir = !this.exibir;
  }
  constructor() {}

  titulo: string = "Contador";

  valor: number = 0;

  increment() {
    this.valor++;
  }
  decrement() {
    this.valor--;
  }

  ngOnInit(): void {}
}
