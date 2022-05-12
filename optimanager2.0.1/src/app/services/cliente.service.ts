import { Injectable } from '@angular/core';
import { collectionData, Firestore, addDoc, collection } from '@angular/fire/firestore';
/*import { addDoc, collection } from 'firebase/firestore';*/
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private firestore: Firestore) { }

  public async addCliente(cliente: Cliente) {
    await addDoc(collection(this.firestore,"clientes"), cliente);
  }

  public getClientes(): Observable<Cliente[]> {
    return collectionData(
      collection(this.firestore, 'clientes'), {idField: 'clienteId'}
    ) as Observable<Cliente[]>;
  }

}
