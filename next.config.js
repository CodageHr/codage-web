/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // Enable the React Compiler (automatic memoization). Matches the psihometar
    // reference; requires babel-plugin-react-compiler (in devDependencies).
    reactCompiler: true,
    // mui-one-time-password-input ships untranspiled ESM and must be transpiled
    // by Next (required under Turbopack / React Server Components).
    transpilePackages: ['mui-one-time-password-input'],
    async redirects() {
        return [];
    },
};

module.exports = nextConfig;
