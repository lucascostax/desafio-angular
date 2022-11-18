import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CriarGenero } from '../models/salvar-usuario.model';
import { GeneroService } from '../services/criar-genero.service';
 
@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {
  form!: FormGroup;
  genero!: CriarGenero[];
  generoid!: number;
  verificarEditar!: boolean;
  constructor(private fb: FormBuilder, private salvarGeneroService: GeneroService) { }
  ngOnInit(): void {
    this.lerDadosGenero()
    this.form = this.fb.group({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl('')
    })
  }
  salvarDadosGenero() {
    const id = (this.genero[(this.genero.length) - 1].id) + 1;
    const nome = this.form.controls['nome'].value
    const genero: CriarGenero = {
      id: id,
      nome: nome
    }
    this.salvarGeneroService.salvarGenero(genero).subscribe({
      next: (genero: CriarGenero[]) => {
        console.log('salvou')
        this.lerDadosGenero()
      },
      error: () => {
        console.log("n salvou");
      }
    })
  }

  lerDadosGenero() {
    this.salvarGeneroService.lerGenero().subscribe({
      next: (genero: CriarGenero[]) => {
        this.genero = this.genero;
        console.log(this.generoid);
      },
      error: () => {
        console.log("error ler genero");
      }
    })
  }
  enviarDados() {
    let dados = {
      id: this.genero[this.genero.length - 1].id + 1,
      nome: this.form.controls["nome"].value,
    }
    this.salvarGeneroService.salvarGenero(dados).subscribe(
      {
        next: (dados: any) => {
          console.log(dados);
          this.lerDadosGenero();
        },
        error: () => {
          console.log("Erro ao cadastrar\n");
        }
      })
  }
  deleteDadosGenero(idgenero: Number) {
    this.salvarGeneroService.deleteGeneros(this.generoid).subscribe({
      next: () => {
        this.lerDadosGenero()
        console.log("deletou");
      },
      error: () => {
        console.log("erro");
      }
    })
  }
  EditarCliente1(){
    const id = this.generoid
        const genero = this.form.controls["genero"].value;

    const usuario: CriarGenero = {id:id,nome:genero}

    this.salvarGeneroService.editarGenero(usuario).subscribe({
      next: () => {
      console.log("editou");

        this.lerDadosGenero()
      },
      error: () => {
        console.log("erro");

      }
    })
    this.verificarEditar = false
    this.form.reset()
  }

  EditarCliente2(itemUsuario:CriarGenero){
    this.lerDadosGenero
    this.generoid = itemUsuario.id
    this.form.controls["genero"].setValue(itemUsuario.nome)
    this.verificarEditar = true
 
  }
}

