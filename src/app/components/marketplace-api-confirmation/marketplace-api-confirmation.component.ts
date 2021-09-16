import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace-api-confirmation',
  templateUrl: './marketplace-api-confirmation.component.html',
  styleUrls: ['./marketplace-api-confirmation.component.scss'],
})
export class MarketplaceApiConfirmationComponent implements OnInit {
  apiKey = 'My API Key';
  apiEndpoint = 'My API Key';

  constructor() {}

  ngOnInit(): void {}
}