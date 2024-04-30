import { Storage } from '@/shared/domain/storage/storage.repository'

export class StoragePodcastRepository implements Storage {
  get<T>(key: string): T {
    const storage = localStorage.getItem(key)
    return storage ? JSON.parse(storage) : null
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
