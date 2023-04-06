import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Design Tokens',
    Svg: require('@site/static/img/undraw_color_palette_re_dwy7.svg').default,
    description: (
      <>
        Design tokens are one part of a design system. Essentially they are variables that store small design decisions in a key-value format.
      </>
    ),
  },
  {
    title: 'Style Dictionary',
    Svg: require('@site/static/img/undraw_my_files_swob.svg').default,
    description: (
      <>
        A style dictionary is a collection of design tokens. Tokens are stored in a platform-agnostic way. In plain text files.
      </>
    ),
  },
  {
    title: 'Exports',
    Svg: require('@site/static/img/undraw_dev_productivity_re_fylf.svg').default,
    description: (
      <>
        Tokens are exported in various formats to be consumed by different platforms and languages. The exports can be installed via npm.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
