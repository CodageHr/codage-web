/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // Enable the React Compiler (automatic memoization). Matches the psihometar
    // reference; requires babel-plugin-react-compiler (in devDependencies).
    reactCompiler: true,
    async redirects() {
        return [
            // Redundant duplicate of the landing page.
            { source: '/home', destination: '/', permanent: true },
            // Services content now lives on the landing page ("Što radimo").
            { source: '/services', destination: '/#usluge', permanent: true },
        ];
    },
};

module.exports = nextConfig;
