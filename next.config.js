const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports;
{
    nextConfig;
}
