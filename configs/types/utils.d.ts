declare global {
  export type Nullable<T> = T | null;

  export type Maybe<T> = T | undefined;

  export type Keys<T extends Record<string, unknown>> = keyof T;

  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export interface Indexed<K = string, T = unknown> {
    [key: K]: T;
  }

  export type UnionizeKey<T extends object> = {
    [k in keyof T]: k;
  }[keyof T];

  export type UnionizeArray<T> = T[number];

  export type UnionizeValue<T extends object> = T[keyof T];

  export type UUID = number;
}
