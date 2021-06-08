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
      name: "Amuba",
      className: "font-amuba"
    },
    {
      name: "Arial Rounded MT Bold",
      className: "font-arial-rounded-mt-bold"
    },
    {
      name: "Catalunya demo",
      className: "font-catalunya-demo"
    },
    {
      name: "Cream Cake",
      className: "font-cream-cake"
    },
    {
      name: "Goldie Rainbow",
      className: "font-goldie-rainbow"
    },
    {
      name: "Harry P",
      className: "font-harry-p"
    },
    {
      name: "Hello Valentina",
      className: "font-"
    },
    {
      name: "Josephsophia",
      className: "font-josephsophia"
    },
    {
      name: "Kiss Boom",
      className: "font-kiss-boom"
    },
    {
      name: "Rainbow Universe",
      className: "font-rainbow-universe"
    },
    {
      name: "Rodfat Two Demo",
      className: "font-rodfat-tow-demo"
    },
    {
      name: "Unicorn Calligraphy",
      className: "font-unicorn-calligraphy"
    },
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
