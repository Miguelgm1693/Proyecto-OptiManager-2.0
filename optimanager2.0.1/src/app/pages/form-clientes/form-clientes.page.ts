import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.page.html',
  styleUrls: ['./form-clientes.page.scss'],
})
export class FormClientesPage implements OnInit {

  cliente: Cliente = {nomCliente:'', apeCliente:'', telCliente:'', dirCliente:'', avCliente:''};
  pageTitle: string = 'Nuevo elemento';
  action: string = 'create';

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) { //editar
      this.pageTitle = 'Editar Cliente';
      this.action = 'edit';
      this.clienteService.getCliente(id).subscribe(
        data => this.cliente = data
      );
    }
  }

  guardarCliente() {
    if (this.action === 'create') {
      this.clienteService.addCliente(this.cliente);
    } else {
      this.clienteService.editarCliente(this.cliente);
    }

    this.router.navigateByUrl('/list-clientes');
  }

  /*guardarCliente(){
    this.clienteService.addCliente(this.cliente);
    this.router.navigateByUrl('/list-clientes');
  }*/

}
