import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../core/models/user';

@Component({
  selector: 'xev-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() currentUser: User | null | undefined;
  
  @Output() logoutEM = new EventEmitter<void>();
}
