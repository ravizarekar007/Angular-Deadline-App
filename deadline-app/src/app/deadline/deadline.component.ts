import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DeadlineService } from '../service/deadline.service';
import { interval, map, Observable, Subscription, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deadline',
  standalone: true,
  imports: [CommonModule],
  providers: [DeadlineService],
  templateUrl: './deadline.component.html',
  styleUrl: './deadline.component.scss',
})
export class DeadlineComponent implements OnInit, OnDestroy {
  secondsLeft: number | null = null;
  private sub = new Subscription();

  secondsLeft$!: Observable<number>;

  constructor(
    private deadlineService: DeadlineService,
    private cdr: ChangeDetectorRef // manually trigger change detection
  ){}

  ngOnInit(): void {
    this.checkDeadline();
    this.checkDeadline1();
  }

  checkDeadline(){
    //The first solution (manual decrement) is more lightweight and avoids repeated API calls.
    // Fetch initial value from backend
    this.sub.add(
      this.deadlineService.getDeadline().subscribe(res => {
        this.secondsLeft = res.secondsLeft;

        // Start countdown only after initial fetch
        this.sub.add(
          interval(1000).subscribe(() => {
            if (this.secondsLeft !== null && this.secondsLeft > 0) {
              this.secondsLeft--;
              this.cdr.markForCheck(); // notify Angular to update DOM
            }
          })
        );
      })
    );

  }

  checkDeadline1(){
    //This second solution uses RxJS reactivity, is robust uses rxjs operator
    // Fectch once from api and decrement locally
    this.secondsLeft$ = this.deadlineService.getDeadline().pipe(
      switchMap(res =>
        interval(1000).pipe(
          map(tick => Math.max(res.secondsLeft - tick, 0)) // decrement locally
        )
      )
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
}
