import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {

  public nameLower: string = 'adrian';   
  public nameUpper: string = 'ADRIAN';  
  public fullName: string = 'AdRiAn BRaVo';
  public customDate: Date = new Date();   

}
