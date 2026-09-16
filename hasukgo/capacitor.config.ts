import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.storytaco.hasukgo',
  appName: '하숙생 맞고',
  webDir: 'dist',
  android: {
    // 세로 모드 고정은 AndroidManifest 에서 처리한다
    allowMixedContent: false,
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;
