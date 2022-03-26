import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input('list') list: Array<any> = [];

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
  }

  buildList() {
    if (this.list && this.list.length > 0) {
      const elements: any[] = [];
      this.list.forEach((item: any) => {
        const properties = [];
        let index = 0;
        for (let key in item) {
          if (index < 5) {
            properties.push({
              key,
              value: item[key]
            });
          }
          index++;
        }
        elements.push(properties);
      })
      return elements;
    }
    return [];
  }

  getIdByUrl(url: string) {
    const splitUrl: string[] = url.split('/');
    const id = splitUrl[splitUrl.length - 2];
    return id;
  }
}
