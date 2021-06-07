import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Font } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SvgStore {
  private textBS : BehaviorSubject<string> = new BehaviorSubject('');
  private fontBS : BehaviorSubject<Font> = new BehaviorSubject(null);

  constructor() { }

  get text(): string {
    return this.textBS.getValue();
  }

  get font(): Font {
    return this.fontBS.getValue();
  }

  get text$(): Observable<string> {
    return this.textBS as Observable<string>;
  }

  get font$(): Observable<Font> {
    return this.fontBS as Observable<Font>;
  }

  set text(text: string){
    this.textBS.next(text);
  }

  set font(font: Font){
    this.fontBS.next(font);
  }
}
