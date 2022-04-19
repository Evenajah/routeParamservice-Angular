import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  AsyncSubject,
  BehaviorSubject,
  map,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';

@Injectable()
export class ActivedRouteService
  extends BehaviorSubject<ParamMap>
  implements OnDestroy
{
  destroy$ = new AsyncSubject<void>();

  param$ = this.route.paramMap.pipe(takeUntil(this.destroy$));

  constructor(private route: ActivatedRoute) {
    super(null);

    this.param$.subscribe(this);
  }

  getParam(param: string) {
    return this.param$.pipe(map((params) => params.get(param)));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
