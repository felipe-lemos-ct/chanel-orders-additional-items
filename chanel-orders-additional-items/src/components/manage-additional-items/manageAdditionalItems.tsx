/* eslint-disable @typescript-eslint/no-explicit-any */

import Text from '@commercetools-uikit/text';
import { PageContentNarrow } from '@commercetools-frontend/application-components';

const ManageAdditionalItems: React.FC = () => {
  return (
    <>
      <PageContentNarrow>
        <div className="pb-5">
          <Text.Headline as="h1">
            Additional Items Management Placeholder{' '}
          </Text.Headline>
        </div>
        <div className="pb-5">
          <Text.Headline as="h2">Wrapping Selection Placeholder</Text.Headline>
        </div>
        <div className="pb-5">
          <Text.Headline as="h2">Gift Card Placeholder</Text.Headline>
        </div>
        <div className="pb-5">
          <Text.Headline as="h2">Samples Placeholder</Text.Headline>
        </div>
      </PageContentNarrow>
    </>
  );
};

export default ManageAdditionalItems;
