import * as React from 'react';
import { Link, RandomComponent } from './component.js';

const someProps = {
  name: 'lol',
};

export default (
  <>
    <RandomComponent {...someProps} />
    <Link url={new URL(window.location.href)} className="storybook-button">
      Woo
    </Link>
  </>
);
