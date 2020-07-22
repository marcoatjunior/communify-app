import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "@shared/models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-steps",
  templateUrl: "steps.component.html",
  styleUrls: ["steps.component.scss"],
})
export class StepsComponent implements OnInit {
  readonly LABEL_STEP_ONE = "Moodle";
  readonly LABEL_STEP_TWO = "Termo de Responsabilidade";
  readonly LABEL_STEP_THREE = "Concluído";
  readonly PRIVACY_MESSAGE = `Após a conclusão do passo a passo será enviado um e-mail para cada um dos endereços informados, contendo o
    e-mail principal utilizado (login junto ao Google) e o IP de rede externo utilizado no preenchimento do
    formulário, a fim de garantir a vigilância de acesso. Diariamente são gerados arquivos de requisições de acesso
    contendo essas informações, para que se tenha total controle das informações acessadas.`;
  readonly PRIVACY_CONFIRMED = `Suas configurações foram salvas. A partir de agora, você terá poderá
    consultar atividades e visualizar suas datas de entrega, além de receber notificações diárias referente aos trabalhos em aberto nos ambientes virtuais.`;

  isLinear = true;
  moodleFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  sameEmail: boolean = false;
  currentUser: User;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.moodleFormGroup = this.formBuilder.group({
      email: ["", Validators.required],
      same: [this.sameEmail],
    });
    this.currentUser = JSON.parse(localStorage.getItem("user"));
  }

  setMoodleEmail() {
    if (this.moodleFormGroup.valid) {
      this.currentUser.moodle_email_address = this.moodleFormGroup.get(
        "email"
      ).value;
      localStorage.setItem("user", JSON.stringify(this.currentUser));
    }
  }

  checkSameEmail() {
    this.sameEmail = !this.sameEmail;
    this.moodleFormGroup
      .get("email")
      .setValue(
        this.sameEmail ? this.currentUser.classroom_email_address : null
      );
  }

  goToHome() {
    this.router.navigate(["/"]);
  }
}
