export interface NormalizedCache {
  add: (key: string, seconds: number, value: string) => Promise<string>;
  get: (key: string) => Promise<any | undefined>;
}
