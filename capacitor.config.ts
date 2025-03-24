
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.deea5eae2f2e47cebb9fed3f67184d11',
  appName: 'furry-networking',
  webDir: 'dist',
  server: {
    url: 'https://deea5eae-2f2e-47ce-bb9f-ed3f67184d11.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null
    }
  }
};

export default config;
