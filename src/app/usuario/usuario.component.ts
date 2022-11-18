import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CriarUsuario } from '../models/salvar-usuario.model';
import { SalvarUsuarioService } from '../services/salvar-usuario.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  form!: FormGroup;
  usuarios!: CriarUsuario[];
  usuarioid!: number;
  verificarEditar!: boolean;
   constructor(private fb: FormBuilder, private salvarUsuarioService: SalvarUsuarioService) { }
  ngOnInit(): void {
    this.lerDadosUsuarios()
    this.form = this.fb.group({
      nome: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl('')
    })
  }
  salvarDadosUsuario() {
    const id = (this.usuarios[(this.usuarios.length) - 1].id) + 1;
    const nome = this.form.controls['nome'].value
    const email = this.form.controls['email'].value
    const telefone = this.form.controls['telefone'].value
    const usuario: CriarUsuario = {
      id: id,
      nome: nome,
      email: email,
      telefone: telefone
    }
    this.salvarUsuarioService.salvarUsuario(usuario).subscribe({
      next: (usuarios: CriarUsuario[]) => {
        console.log('salvou')
        this.lerDadosUsuarios()
      },
      error: () => {
        console.log("n salvou");
      }
    })
  }
  lerDadosUsuarios() {
    this.salvarUsuarioService.lerUsuario().subscribe({
      next: (usuario: CriarUsuario[]) => {
        this.usuarios = usuario;
        console.log(this.usuarios);
      },
      error: () => {
        console.log("error ler usuario");
      }
    })
  }
  enviarDados() {
    let dados = {
      id: this.usuarios[this.usuarios.length - 1].id + 1,
      nome: this.form.controls["nome"].value,
      email: this.form.controls["email"].value,
      telefone: this.form.controls["telefone"].value
    }
    this.salvarUsuarioService.salvarUsuario(dados).subscribe(
      {
        next: (dados) => {
          console.log(dados);
          this.lerDadosUsuarios();
        },
        error: (erro) => {
          console.log("Erro ao cadastrar\n" + erro);
        }
       })
  }
  deleteDadosUsuario(idUsuario: Number) {
    this.salvarUsuarioService.deleteUsuario(idUsuario).subscribe({
      next: () => {
        this.lerDadosUsuarios()
        console.log("deletou");
       },
      error: () => {
        console.log("erro");
       }
    })
  }
  EditarUsuario() {
     const id = this.usuarioid
    const nome = this.form.controls["nome"].value;
    const email = this.form.controls["email"].value;
    const telefone = this.form.controls["telefone"].value;
      const usuario: CriarUsuario = { id: id, nome: nome, email: email, telefone: telefone }
     this.salvarUsuarioService.editarUsuario(usuario).subscribe({
      next: () => {
        console.log("editou");
        this.lerDadosUsuarios()
      },
      error: () => {
        console.log("deu erro ao editar");
       }
    })
    this.verificarEditar = false
    this.form.reset()
  }
   Editarusuario2(itemUsuario: CriarUsuario) {
    this.usuarioid = itemUsuario.id
     this.form.controls["nome"].setValue(itemUsuario.nome)
    this.form.controls["email"].setValue(itemUsuario.email)
    this.form.controls["telefone"].setValue(itemUsuario.telefone)
    this.verificarEditar = true
  }
}