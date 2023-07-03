const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

module.exports = withNextIntl({
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "styles/utils/variables.scss"; @import "styles/utils/mixins.scss";
    @import "styles/utils/placeholders.scss";`,
 },
});
