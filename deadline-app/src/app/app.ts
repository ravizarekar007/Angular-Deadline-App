import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router, RouterModule } from '@angular/router';
import { DeadlineComponent } from './deadline/deadline.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DeadlineComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  title = 'Deadline-App';

  constructor(private cdr: ChangeDetectorRef, private router: Router){
  }

  ngOnInit() {
    this.cdr.markForCheck();
  }

}
