/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  dynamicStartUrl: true,
  register: true,
  sw: 'sw.js'
});

module.exports = withPWA({
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "styles/utils/variables.scss"; @import "styles/utils/mixins.scss";
    @import "styles/utils/placeholders.scss";`,
 },
});
