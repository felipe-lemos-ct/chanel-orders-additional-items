import { lazy } from 'react';

const ManageAdditionalItems = lazy(
  () =>
    import(
      './manageAdditionalItems' /* webpackChunkName: "manageAdditionalItems" */
    )
);

export default ManageAdditionalItems;
