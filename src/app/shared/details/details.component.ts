import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details: any;
  constructor(private activatedRoute: ActivatedRoute,
    private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      const id: string = param.id;
      const resource: string = param.resource;
      if (id && id != '' && resource && resource != '') {
        this.detailsService.setParams(id, resource);
      }
    })

    this.detailsService.details.subscribe((details: any) => {
      this.details = details;
    })
  }

  getDetailsToArray() {
    const properties = [];
    if(this.details && this.details != null) {
      for(let key in this.details){
        properties.push({
          key,
          value: this.details[key]
        })
      }
    }
    return properties;
  }

}
