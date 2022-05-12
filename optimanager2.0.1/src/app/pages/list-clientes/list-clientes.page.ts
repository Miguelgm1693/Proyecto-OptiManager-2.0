import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.page.html',
  styleUrls: ['./list-clientes.page.scss'],
})
export class ListClientesPage implements OnInit {
  clientes: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService,
              private router: Router
  ) { 
    this.clientes = this.clienteService.getClientes();
  }

  ngOnInit() {
  }

  addCliente() {
    this.router.navigateByUrl('/crear-cliente');
  }


}
