import {dep} from './dependency-with-ts-error';

export default function (): typeof dep {
  // // This will trigger TS error in './dependency-with-ts-error':
  // return dep;

  // This will not:
  return () => 0;
}
