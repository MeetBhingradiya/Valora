declare global {
    interface Window {
      particlesJS: (tagId: string, params: any) => void;
    }
  }
  
  export {};
  