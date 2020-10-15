import { Component, OnInit } from "@angular/core";
import { clear } from "console";
import { randomBytes } from "crypto";

@Component({
  selector: "app-tic-tac-toe",
  templateUrl: "./tic-tac-toe.component.html",
  styleUrls: ["./tic-tac-toe.component.css"],
})
export class TicTacToeComponent {
  exibir: boolean = false;
  abrirJogo() {
    this.exibir = !this.exibir;
  }
  player: string = "X";
  winner: string = "";
  dotX: number = 0;
  dotO: number = 0;
  //Criar campos do jogo da velha
  board: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  //Executar jogadas
  play(line, col, player) {
    console.log(`Campeão ${this.winner}`);
    if (this.board[line][col] == "" && this.winner == "") {
      this.board[line][col] = player;
      console.log(
        `Jogada na linha ${line + 1} e coluna ${col + 1} do jogador ${player}`
      );
      if (this.result(this.player)) {
        this.winner = this.player;
        if (this.winner == "X") {
          this.dotX++;
        } else {
          this.dotO++;
        }
      }
      this.changePlayer();
    } else {
      console.log(`Não pode mudar o valor do adversario`);
    }
    console.log(this.player);
  }
  //mudar jogador
  changePlayer() {
    if (this.player == "X") {
      this.player = "O";
    } else {
      this.player = "X";
    }
  }
  result(player: string) {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player
      )
        return true;
    }
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player
      )
        return true;
    }
    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    )
      return true;
    if (
      this.board[0][2] == player &&
      this.board[1][1] == player &&
      this.board[2][0] == player
    )
      return true;
    return false;
  }

  reiniciar() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.winner = "";
    if (Math.random() > 0.5) {
      this.player = "X";
    } else {
      this.player = "O";
    }
    console.log(`Jogo reiniciado`);
  }
  reiniciarJogo() {
    this.reiniciar();
    this.dotX = 0;
    this.dotO = 0;
  }
  constructor() {}
}
