import { apicraft } from '@siberiacancode/apicraft';
import process from 'node:process';

process.loadEnvFile();

export default apicraft([
  {
    input: `${process.env.API_URL}/docs-json`,
    output: 'generated/api',
    baseUrl: '/api',
    instance: {
      name: 'fetches',
      runtimeInstancePath: './src/utils/api/instance'
    },
    nameBy: 'path',
    groupBy: 'standalone',
    plugins: ['tanstack', { name: 'typescript', enums: true }]
  }
]);
