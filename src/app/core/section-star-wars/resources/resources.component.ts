import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Input('resource') resource = '';
  constructor(private router: Router,
    private coreService: CoreService) { }

  ngOnInit(): void {

  }
  setResource(route: string) {
    this.coreService.setResetSearch();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([route]);
    })
  
  }
}
