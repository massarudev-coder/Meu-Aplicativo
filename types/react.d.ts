declare module 'react' {
  export namespace React {
    interface FC<P = {}> {
      (props: P): ReactElement<any, any> | null;
    }
  }
  export function createElement<T extends keyof any>(
    type: T,
    props?: any,
    ...children: any[]
  ): any;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any): any;
  export function jsxs(type: any, props: any): any;
  export function Fragment(props: any): any;
}
