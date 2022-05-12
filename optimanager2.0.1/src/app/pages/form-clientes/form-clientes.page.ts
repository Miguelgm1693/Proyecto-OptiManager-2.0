import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.page.html',
  styleUrls: ['./form-clientes.page.scss'],
})
export class FormClientesPage implements OnInit {

  cliente: Cliente = {nomCliente:'', apeCliente:'', telCliente:'', dirCliente:'', avCliente:''};

  constructor(
    private clienteService: ClienteService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  guardarCliente(){
    this.clienteService.addCliente(this.cliente);
    this.router.navigateByUrl('/list-clientes');
  }

}
