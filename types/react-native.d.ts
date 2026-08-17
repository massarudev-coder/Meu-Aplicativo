declare module 'react-native' {
  import type { FC } from 'react';

  export interface StyleProp<T> {
    [key: string]: any;
  }

  export interface ViewStyle {
    flex?: number;
    backgroundColor?: string;
    height?: number;
    width?: number;
    padding?: number;
    margin?: number;
    [key: string]: any;
  }

  export interface TextStyle {
    fontSize?: number;
    color?: string;
    fontWeight?: string;
    [key: string]: any;
  }

  export const StyleSheet: {
    create<T extends Record<string, any>>(styles: T): T;
  };

  export interface ViewProps {
    style?: StyleProp<ViewStyle>;
    [key: string]: any;
  }

  export const View: FC<ViewProps>;

  export interface TextProps {
    style?: StyleProp<TextStyle>;
    [key: string]: any;
  }

  export const Text: FC<TextProps>;
}

declare module '@expo/metro-runtime' {
  export {};
}
