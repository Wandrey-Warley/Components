import { Component, OnInit } from "@angular/core";
import { ToDoItem } from "./todoItem";

@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.css"],
})
export class ToDoListComponent {
  exibir: boolean = false;
  abrirLista() {
    this.exibir = !this.exibir;
  }
  tasks: ToDoItem[] = [
    { description: "Arrumar a Cama", done: true },
    { description: "Lavar a Louça", done: false },
    { description: "Estudar", done: false },
    { description: "Varrer", done: true },
    { description: "Fazer almoço", done: false },
  ];
  addTask(newTask: string) {
    this.tasks.push({
      description: newTask,
      done: false,
    });
  }
  deleteTask(i: number) {
    console.log(`Excluir posiçao ${i}`);
    this.tasks.splice(i, 1);
  }
}
