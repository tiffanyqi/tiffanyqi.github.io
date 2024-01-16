declare global {
  interface Window {
    google: {
      charts: {
        load: (version: string) => void;
        setOnLoadCallback: (callback: () => void) => void;
      };
      visualization: {
        drawChart: (options: any) => void;
      };
    };
  }
}
