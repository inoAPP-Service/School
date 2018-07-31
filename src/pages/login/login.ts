import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
//import { componentFactoryName } from '../../../node_modules/@angular/compiler';
import{ HomePage} from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class loginPage{
    goToHome(){
        this.NavCtrl.push(HomePage)
    }
    NombreUsuario: string=''
    constructor
    (
        public NavCtrl: NavController,
    ){
        this.NombreUsuario='Patricio Calderón'
        
        

    }
    

}
