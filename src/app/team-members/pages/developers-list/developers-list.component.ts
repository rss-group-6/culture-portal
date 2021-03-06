import { Component, OnInit } from '@angular/core';
import { Developer } from '@shared/models/developer';
import { Developers } from '@shared/mock-data/mock.developersEN';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss'],
})
export class DevelopersListComponent implements OnInit {
  developers: Developer[] = Developers;

  constructor(private spinnerService: NgxSpinnerService) {}

  public ngOnInit(): void {
    this.spinner();
  }

  private spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 0);
  }
}
