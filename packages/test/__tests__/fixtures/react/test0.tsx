import { Link, RandomComponent } from './component.js';

const someProps = {
  name: 'lol',
};

export default (
  <>
    <RandomComponent {...someProps} />
    <Link url={new URL(window.location.href)} className="button">
      Woo
    </Link>
  </>
);
