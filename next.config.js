// next.config.js
module.exports = {
  exportPathMap() {
    return {
      '/': { page: `/` },
      '/rfp/list': { page: `/rfp/list` },
      '/rfp/details': { page: `/rfp/details` },
      '/suppliers': { page: `/suppliers` },
    };
  },
};
