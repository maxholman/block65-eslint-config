import * as React from 'react';
import {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

export const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement> & { url: URL }> =
  ({ url, children, ...props }) => {
    return (
      <a {...props} href={url.toString()}>
        {children}
      </a>
    );
  };

export const RandomComponent: FC<
  HTMLAttributes<HTMLHeadingElement> & { name: string }
> = ({ name }) => {
  const [state, setState] = useState(name);

  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setState('Yeah');
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.querySelectorAll('*').forEach((el) => {
        el.className = 'woot woot';
      });
    }
  }, []);

  return (
    <h1 ref={ref}>
      <Link url={new URL(window.location.href)}>{state}</Link>
    </h1>
  );
};
