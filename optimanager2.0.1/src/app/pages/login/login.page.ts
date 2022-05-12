import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  private cargando: boolean;

  constructor(
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async login() {
    const connectionSuccess = await this.authService.login(this.email, this.password);
    if (connectionSuccess) {
      this.router.navigateByUrl('/list-clientes');
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create ({
      header: 'Error de Acceso',
      subHeader: 'No se ha podido acceder a la cuenta',
      message: 'Comprueba si el correo electrónico y contraseña son correctos',
      buttons: ['Aceptar']
    });
    this.cargando = false;
    await alert.present();
  }

  /*login() {
    this.authService.login("test@optimanager.com", "12345678")
  }*/

}
