export interface CustomAction<T> {
  execute(obj: T): void;
}
