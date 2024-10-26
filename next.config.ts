import path from 'path';
import { NextConfig } from 'next';

const __dirname = path.resolve();

const nextConfig: NextConfig = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'same-origin',
                    },
                ]
            }
        ];
    },
    webpack: (config: any, { buildId, dev, isServer, defaultLoaders, webpack }: any) => {
        let Config = {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    '@Public': path.resolve(__dirname, './public'),
                    '@Root': path.resolve(__dirname, './'),
                    '@': path.resolve(__dirname, './src'),
                    '@App': path.resolve(__dirname, './src/app'),
                    '@Pages': path.resolve(__dirname, './src/pages'),
                    '@Models': path.resolve(__dirname, './src/model'),
                    "@Components": path.resolve(__dirname, "./src/components"),
                    "@Styles": path.resolve(__dirname, "./src/styles"),
                    "@Lib": path.resolve(__dirname, "./src/lib"),
                    ...config.resolve.alias,
                },
                extensions: [
                    '.css',
                    '.mdx',
                    '.ts',
                    '.tsx',
                    '.json',
                    '.svg',
                    '.webp',
                    '.png',
                    '.jpg',
                    '.ico',
                    '.js',
                    '.jsx',
                    ...config.resolve.extensions
                ],
            },
            experiments: {
                topLevelAwait: true,
                layers: true
            },
        };
        return Config;
    }
};

export default nextConfig;