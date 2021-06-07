import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SvgStore } from '../storage/svg.store';
import { Font } from "../models";

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  private svgFormFB : FormGroup = this.formBuilder.group(
    {
      text: ['', [Validators.required, Validators.maxLength(20)]],
      font: ['', [Validators.required]]
    }
  )

  private readonly fontsArray : Font[] = [
    {
      name: "Arial",
      className: "font-arial"
    },
    {
      name: "Pepito",
      className: "font-pepito"
    }
  ]; 

  constructor(private svgStore: SvgStore, private formBuilder: FormBuilder) {
    this.svgFormFB.valueChanges.subscribe(formData => {
      console.log('FORM DATA: ', formData) // TODO DELETE THIS after testing
      this.text = formData.text;
      this.font = formData.font;
    });
   }

  get svgForm(): FormGroup {
    return this.svgFormFB;
  }

  get fonts(){
    return this.fontsArray;
  }

  get text(){
    return this.svgStore.text;
  }

  get font(): Font{
    return this.svgStore.font;
  }

  get text$(){
    return this.svgStore.text$;
  }

  get font$(){
    return this.svgStore.font$;
  }

  set text(text: string){
    this.svgStore.text = text;
  }

  set font(font: Font){
    this.svgStore.font = font;
  }


}
