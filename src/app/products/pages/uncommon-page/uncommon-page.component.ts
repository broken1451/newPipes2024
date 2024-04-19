import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {

  // i18n select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' | 'other'= 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarlA',
    other: 'invitarlos'
  }

 
  changePerson(){

    if (this.name === 'Fernando') {
      this.name = 'Melissa'
      this.gender = 'female';
    } else {
      this.name = 'Fernando'
      this.gender = 'male';
    }
  }

   // i18n plural
   public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Fernando', 'Melissa']
    public clientsMap = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos 2 personas esperando.',
      'other': 'tenemos # clientes esperando.'
    }

   borrarPersona(){
     this.clients.shift();
   }

   // KeyValue Pipe
   // transforma un objeto en un array de objetos
    public person = {
      name: 'Fernando',
      age: 35,
      address: 'Sevilla, España'
    }

  
  // Async Pipe
  public myObservable = interval(2000).pipe(
    tap( (value) => console.log('tap', value))
  )

  public valuePromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data of promise');
      this.person.name = 'other name';
      console.log('Promise finished');
    }, 3500);
  });
}
