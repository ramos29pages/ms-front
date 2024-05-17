import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [RouterLink, CapitalizePipe],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  @Input() routerLink : string = 'members';
  @Input() label : string = 'Members';
  @Input() iconURL : string = '';
}
