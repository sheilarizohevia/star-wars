import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  list: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private coreService: CoreService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.coreService.setResource(param.resource);
    })

    this.coreService.list.subscribe((list: Array<any>) => {
      this.list = list;
    })
  }
}
