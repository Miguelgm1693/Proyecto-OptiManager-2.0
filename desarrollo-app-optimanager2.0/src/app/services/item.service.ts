import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Clientes } from '../model/clientes';
import { Articulos } from '../model/articulos';
import { Empleados } from '../model/empleados';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  clientes: Observable<Clientes[]>;
  articulos: Observable<Articulos[]>;
  empleados: Observable<Empleados[]>;
  userId: string;

  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.authService
      .getCurrentUser()
      .subscribe((data) => (this.userId = data.uid));
  }

  /*** CLIENTES ***/

  public addCliente(cliente: Clientes): Promise<DocumentReference> {
    return this.db.collection<Clientes>('clientes').add(cliente);
  }

  public getClientes(): Observable<Clientes[]> {
    return this.db
      .collection<Clientes>('clientes')
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map(
            (snap) =>
              <Clientes>{
                ...(snap.payload.doc.data() as Clientes),
                clienteId: snap.payload.doc.id,
              }
          )
        )
      );
  }

  public addListaCliente(cliente: Clientes): Promise<DocumentReference> {
    return this.db
      .collection('users/' + this.userId + '/clientes')
      .add(cliente);
  }

  public removeClienteLista(idCliente: string): void {
    this.db
      .collection('users/' + this.userId + '/clientes')
      .doc(idCliente)
      .delete();
  }

  public getClienteById(id: string): Observable<Clientes> {
    return this.db
      .collection('users/' + this.userId + '/clientes')
      .doc<Clientes>(id)
      .valueChanges();
  }

  public getAddClienteLista(userId: string): Observable<Clientes[]> {
    return this.db
      .collection<Clientes>('users/' + userId + '/clientes')
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map(
            (snap) =>
              <Clientes>{
                ...snap.payload.doc.data(), // as Juego
                clienteId: snap.payload.doc.id,
              }
          )
        )
      );
  }
}
