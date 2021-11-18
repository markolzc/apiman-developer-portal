import { Component } from '@angular/core';
import { IFooter } from '../../interfaces/IConfig';
import { FooterService } from '../../services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footer: IFooter;

  constructor(private footerService: FooterService) {
    this.footer = footerService.footer;
  }
}
