import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customizador',
  templateUrl: './customizador.component.html',
  styleUrls: ['./customizador.component.scss'],
})
export class CustomizadorComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: string;
  @Input() autocompletar!: string;

  constructor() { }

  ngOnInit() {}

}
