declare module 'next-pwa' {
  import { NextConfig } from 'next';
  
  interface PWAConfig {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    runtimeCaching?: Array<{
      urlPattern: RegExp | string;
      handler: string;
      method?: string;
      options?: {
        cacheName?: string;
        expiration?: {
          maxEntries?: number;
          maxAgeSeconds?: number;
        };
        cacheableResponse?: {
          statuses?: number[];
        };
        networkTimeoutSeconds?: number;
        rangeRequests?: boolean;
      };
    }>;
  }

  interface NextPWAConfig extends NextConfig {
    pwa?: PWAConfig;
  }

  function withPWA(config: NextPWAConfig): NextConfig;
  export = withPWA;
} 