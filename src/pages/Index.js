import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionFeatures2 from '../components/features/IndexSectionFeatures2';
import IndexSectionPricing3 from '../components/pricing/IndexSectionPricing3';
import IndexSectionFaqs4 from '../components/faqs/IndexSectionFaqs4';
import IndexSectionFooters5 from '../components/footers/IndexSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionFeatures2 />
      <IndexSectionPricing3 />
      <IndexSectionFaqs4 />
      <IndexSectionFooters5 />
    </React.Fragment>
  );
}

