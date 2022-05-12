import { Injectable } from '@angular/core';
import { collectionData, Firestore, addDoc, collection, docData } from '@angular/fire/firestore';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
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

  async borrarCliente(id: string) {
    await deleteDoc(doc(this.firestore, `clientes/${id}`));
  }

  async editarCliente(cliente:Cliente) {
    await setDoc(doc(this.firestore, `clientes/${cliente.clienteId}`), cliente);
  }

  getCliente(id: string):Observable<Cliente> {
    const docRef = doc(this.firestore, `clientes/${id}`);
    return docData(docRef, {idField:'clienteId'}) as Observable<Cliente>;
  }

}
