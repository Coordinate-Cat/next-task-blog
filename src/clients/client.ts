// libs/client.ts
// microCMSのAPIを叩くためのクライアントを作成するファイル
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'w2cy22awjv',
  apiKey: process.env.API_KEY!,
});
