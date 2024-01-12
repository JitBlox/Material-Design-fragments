/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Material Design fragments, at
* https://www.jitblox.com/project/rVvXeSDSXs/material-design-fragments
*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

/**
* A multi-step form created using a horizontal Material Design stepper. Easily replace the example
* inputs with your own or add new steps using the toolbox.
*/
@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss'],
  imports: [MatStepperModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, CommonModule]
})
export class MultiStepFormComponent {

  constructor() {}
}
