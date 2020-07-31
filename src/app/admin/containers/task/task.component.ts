import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as R from 'ramda';

import { Task } from '@admin/models/task.model';
import * as fromActions from '@core/store/actions';
import * as fromStore from '@core/store';

@Component({
  selector: 'app-task',
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  public todos$: Observable<any>;
  public lastUpdate$: Observable<Date>;
  public todosCompleteds: number;
  public todosInCompleteds: number;
  private hasComplete: any = R.has('isCompleted');

  constructor(private store: Store<fromStore.State>) {
    this.todos$ = store.select(fromStore.geTaskingState);
    this.lastUpdate$ = store.select(fromStore.getLastUpdateState);
  }

  ngOnInit(): void {
    this.todos$.subscribe((todos: any) => {
      this.todosCompleteds = 0;
      this.todosInCompleteds = 0;

      todos.forEach((todo: Task) => {
        if (!todo.isCompleted || !this.hasComplete(todo)) {
          this.todosCompleteds++;
        } else {
          this.todosInCompleteds++;
        }
      });
    });
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value) {
      return;
    }
    this.store.dispatch(new fromActions.AddTodo(input.value));
    input.value = '';
  }

  toggleTodo(todo: Task) {
   this.store.dispatch(new fromActions.ToggleTodo(todo.id));
  }

  removeTodo(todo: Task) {
    this.store.dispatch(new fromActions.RemoveTodo(todo.id));
  }

  onEnter(input: HTMLInputElement) {
    this.addTodo(input);
  }

}
