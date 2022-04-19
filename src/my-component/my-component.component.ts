import {
  Component,
  Inject,
  InjectionToken,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { routeParamFactory } from '../activated-route.factories';
import { ActivedRouteService } from '../services/actived-route.service';

export const APP_SOME_ID = new InjectionToken<Observable<string>>(
  'get id from route param'
);

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  //get ค่า param แบบใหม่ แยก logic การ get param ออกไป
  providers: [
    // {
    //   provide: APP_SOME_ID,
    //   useFactory: routeParamFactory('id'),
    //   deps: [ActivatedRoute],
    // },
    ActivedRouteService,
  ],
})
export class MyComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  //get ค่า param แบบเดิม
  // id$: Observable<string>;
  // constructor(private route: ActivatedRoute) {
  //   this.id$ = this.route.paramMap.pipe(
  //     takeUntil(this.destroy$),
  //     map((params) => params.get('id'))
  //   );
  // }

  //get ค่า param แบบใหม่
  // constructor(@Inject(APP_SOME_ID) public readonly id$: Observable<string>) {}

  constructor(public readonly params$: ActivedRouteService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
