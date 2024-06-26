export interface Storage {
  get<T>(key: string): T
  set<T>(key: string, value: T): void
  clear(): void
}
