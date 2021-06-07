import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Font } from 'src/app/models';
import { SvgService } from 'src/app/services/svg.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(private svgService: SvgService) { }

  ngOnInit(): void {

  }

  get svgForm(): FormGroup {
    return this.svgService.svgForm as FormGroup;
  }

  get fonts(): Font[] {
    return this.svgService.fonts;
  }

}
