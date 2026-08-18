declare module 'react-native' {
  export interface ViewStyle {
    flex?: number;
    backgroundColor?: string;
    height?: number;
    [key: string]: any;
  }

  export interface TextStyle {
    fontSize?: number;
    color?: string;
    [key: string]: any;
  }

  export interface StyleProp<T> {
    [key: string]: any;
  }

  export const StyleSheet: {
    create<T extends Record<string, any>>(styles: T): T;
  };

  export const View: React.FC<any>;
  export const Text: React.FC<any>;
  export const TextInput: React.FC<any>;
}

declare module '@expo/metro-runtime' {
  export {};
}
