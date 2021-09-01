export default interface NormalizedCache {
  add: (key: string, second: number, value: string) => Promise<string>;
  get: (key: string) => Promise<any | undefined>;
}
