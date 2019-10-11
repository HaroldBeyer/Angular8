import { ContatoService } from "./../services/contato.service";
import { Contato } from "../../models/contato.model";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contato-form",
  templateUrl: "./contato-form.component.html",
  styleUrls: ["./contato-form.component.css"]
})
export class ContatoFormComponent implements OnInit {
  contato: Contato;
  contatos: Contato[];

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contato = new Contato();
  }

  onSubmit(form: NgForm) {
    this.contato = form.value;
    this.contato.id = new Date().getTime().toString();
    this.contatoService.save(this.contato);
    console.log(form.value);
    //Errado, deveria ser uma observable...
    window.location.reload();
  }
}
