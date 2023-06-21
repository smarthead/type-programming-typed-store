type KeyPaths<T> = {
  [K in keyof T]:
    T[K] extends { [key: string]: unknown }
    ? string & K | `${string & K}.${string & KeyPaths<T[K]>}`
    : string & K;
}[keyof T];

type TypeAtKeyPath<T, KeyPath> =
  KeyPath extends keyof T
  ? T[KeyPath]
  : KeyPath extends `${infer First}.${infer Rest}`
    ? First extends keyof T
      ? TypeAtKeyPath<T[First], Rest>
      : never
    : never;

export class Store<T> {
  stream<K extends KeyPaths<T>>(
    event: K,
    handler: (value: TypeAtKeyPath<T, K>) => void
  ) {
    // ...
  }
}
