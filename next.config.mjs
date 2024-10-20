import createNextIntlPlugin from "next-intl/plugin";
import { build } from "velite";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.plugins.push(new VeliteWebpackPlugin());
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
            }
        ],
    },
};

class VeliteWebpackPlugin {
    static started = false;
    apply(/** @type {import('webpack').Compiler} */ compiler) {
        compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
            if (VeliteWebpackPlugin.started) return;
            VeliteWebpackPlugin.started = true;
            const dev = compiler.options.mode === "development";
            await build({ watch: dev, clean: !dev });
        });
    };
};

export default withNextIntl(nextConfig);