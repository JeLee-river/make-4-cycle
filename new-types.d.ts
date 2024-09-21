import 'react';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_UPLOAD_ICON: string;
    }
  }
}

declare module 'react' {
  interface CSSProperties {
    '--image-url'?: string;
  }
}
