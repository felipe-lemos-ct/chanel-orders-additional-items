/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Chanel Orders Additional Items',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'chanel-rfp-042024',
    },
    production: {
      customViewId: 'clumfblss0003jvdz1n6szrbb',
      url: 'https://my-custom-view.com',
    },
  },
  oAuthScopes: {
    view: ['view_orders', 'view_key_value_documents'],
    manage: ['manage_orders', 'manage_key_value_documents'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
