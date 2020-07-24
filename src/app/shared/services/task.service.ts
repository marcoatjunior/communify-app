import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "environment";
import { Task } from "@shared/models/task";
import { TaskOriginEnum } from "@shared/enums/TaskOriginEnum";
import { delay } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  fakeData = [
    {
      id: "dads-asdasdas-eqwewq-dasdas",
      name: "Prova Ger. Des. Soft.",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.MOODLE,
    },
    {
      id: "dads-asdasdas-eqwewq-kllk",
      name: "Trabalho Empreendedorismo e Criatividade",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.MOODLE,
    },
    {
      id: "dads-asdasdas-dqweqw-dasdas",
      name: "Atividade Compiladores",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM,
    },

    {
      id: "dads-e332-eqwewqd-dasdas",
      name: "Prova Algoritmos",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM,
    },
    {
      id: "dads-fwrewr-fdfsd-dasdas",
      name: "Teste Estatística",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM,
    },
    {
      id: "dads-asdasdas-fwere-dasdas",
      name: "Trabalho Prog. Orientada a Objetos",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.MOODLE,
    },
    {
      id: "dads-ewrwer-erwerwe-dasdas",
      name: "Atividade Teoria da Computação",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.MOODLE,
    },
    {
      id: "dads-e223432-eqwewq-dasdas",
      name: "Resenha Qualidade e Teste de Software",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM,
    },
    {
      id: "dads-kdaslkdas-eqwewq-dasdas",
      name: "Artigo Arquitetura de Banco de Dados",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM,
    },
    {
      id: "dads-dkasdlaks-eqwewq-dasdas",
      name: "Avaliação Tópicos Esp. C. C.",
      returnDate: "2020-08-12 17:00:00",
      origin: TaskOriginEnum.CLASSROOM,
    },
  ];

  get(): Observable<Task[]> {
    return of(this.fakeData).pipe(delay(2000));
  }
}
