import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FeaturesSectionNavigations1 from '../components/navigations/FeaturesSectionNavigations1';
import FeaturesSectionFeatures2 from '../components/features/FeaturesSectionFeatures2';
import FeaturesSectionFeatures3 from '../components/features/FeaturesSectionFeatures3';
import FeaturesSectionFeatures4 from '../components/features/FeaturesSectionFeatures4';
import FeaturesSectionFooters5 from '../components/footers/FeaturesSectionFooters5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Features() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FeaturesSectionNavigations1 />
      <FeaturesSectionFeatures2 />
      <FeaturesSectionFeatures3 />
      <FeaturesSectionFeatures4 />
      <FeaturesSectionFooters5 />
    </React.Fragment>
  );
}

