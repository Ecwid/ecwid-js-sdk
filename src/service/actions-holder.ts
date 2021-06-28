import { CustomAction } from '../type/event';

class ActionsHolder<T> {
  private actions: CustomAction<T>[] = [];

  get(): CustomAction<T>[] {
    return this.actions;
  }

  add(action: (obj: T) => void) {
    this.actions.push({
      execute: action,
    });
  }

  clear() {
    this.actions = [];
  }
}

export default ActionsHolder;
