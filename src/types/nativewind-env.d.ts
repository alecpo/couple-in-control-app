/// <reference types="react" />
/// <reference types="nativewind/types" />

declare module "nativewind" {
  import type { View as RNView, Text as RNText } from "react-native";

  export function styled<T extends React.ComponentType<never>>(Component: T): T;

  export type StyledComponent<T> = T & {
    className?: string;
  };

  export type View = StyledComponent<RNView>;
  export type Text = StyledComponent<RNText>;
}
