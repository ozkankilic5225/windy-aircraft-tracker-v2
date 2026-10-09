import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-aircraft-tracker-v2',
    version: '2.0.0',
    icon: '✈',
    title: 'Uçak Takip Sistemi V2',
    description: 'Çok kaynaklı ADS-B ve hava durumu destekli uçak takip eklentisi.',
    author: 'Ozkan Kilic',
    repository: 'https://github.com/ozkankilic5225/windy-aircraft-tracker-v2',
    desktopUI: 'rhpane',
    mobileUI: 'small',
    routerPath: '/aircraft-tracker-v2',
};

export default config;