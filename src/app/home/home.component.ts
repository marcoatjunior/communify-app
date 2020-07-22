import { Component, OnInit } from "@angular/core";
import { Task } from "@shared/models/task";
import { TaskOriginEnum } from '@shared/enums/TaskOriginEnum';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["home.component.scss"],
})
export class HomeComponent implements OnInit {
  readonly TASKS = "Tarefas do semestre";

  displayedColumns: string[] = ["name"];

  dataSource: Task[] = [
    {
      id: "dads-asdasdas-eqwewq-dasdas",
      name: "Prova Ger. Des. Soft.",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-asdasdas-eqwewq-kllk",
      name: "Trabalho Empreendedorismo e Criatividade",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-asdasdas-dqweqw-dasdas",
      name: "Atividade Compiladores",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },

    {
      id: "dads-e332-eqwewqd-dasdas",
      name: "Prova Algoritmos",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-fwrewr-fdfsd-dasdas",
      name: "Teste Estatística",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-asdasdas-fwere-dasdas",
      name: "Trabalho Prog. Orientada a Objetos",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-ewrwer-erwerwe-dasdas",
      name: "Atividade Teoria da Computação",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-e223432-eqwewq-dasdas",
      name: "Resenha Qualidade e Teste de Software",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-kdaslkdas-eqwewq-dasdas",
      name: "Artigo Arquitetura de Banco de Dados",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
    {
      id: "dads-dkasdlaks-eqwewq-dasdas",
      name: "Avaliação Tópicos Esp. C. C.",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
