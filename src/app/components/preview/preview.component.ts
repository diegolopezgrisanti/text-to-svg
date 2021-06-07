import { Component, OnInit } from '@angular/core';
import { SvgService } from 'src/app/services/svg.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private svgService : SvgService) { }

  ngOnInit(): void {
  }

  get text$ () {
    return this.svgService.text$;
  }

  get font$ () {
    return this.svgService.font$;
  }

}
