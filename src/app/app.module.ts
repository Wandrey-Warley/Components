import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { CounterComponent } from "./counter/counter.component";
import { TicTacToeComponent } from "./tic-tac-toe/tic-tac-toe.component";
import { DiretivaComponent } from "./diretiva/diretiva.component";
import { PrimeiraDiretivaDirective } from "./primeira-diretiva.directive";
import { HeaderComponent } from "./header/header.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TicTacToeComponent,
    DiretivaComponent,
    PrimeiraDiretivaDirective,
    HeaderComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
