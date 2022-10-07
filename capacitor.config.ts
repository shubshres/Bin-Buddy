import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'bin-buddy',
  webDir: 'www',
  bundledWebRuntime: false, 
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"], 
      "serverClientId": "739520681988-uke7l9v7u9hqgjpughcrq6acdin37b4s.apps.googleusercontent.com", 
      "forceCodeForRefreshToken": true, 
    }
  }
};

export default config;
