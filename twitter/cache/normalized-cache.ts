export default interface NormalizedCache {
  add: (key: string, seconds: number, value: string) => boolean;
  get: (key: string) => Promise<any | undefined>;
}
