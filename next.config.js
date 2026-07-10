/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // Enable the React Compiler (automatic memoization). Matches the psihometar
    // reference; requires babel-plugin-react-compiler (in devDependencies).
    reactCompiler: true,
    async redirects() {
        return [];
    },
};

module.exports = nextConfig;
