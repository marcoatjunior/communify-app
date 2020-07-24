import { Component, OnInit } from "@angular/core";
import { Task } from "@shared/models/task";
import { TaskService } from "@shared/services/task.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["home.component.scss"],
})
export class HomeComponent implements OnInit {
  readonly TASKS = `Lista de tarefas publicadas`;

  displayedColumns: string[] = ["name"];
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.get();
  }
}
