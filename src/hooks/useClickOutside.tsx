import { RefObject, useEffect } from 'react';

interface Props {
  ref: RefObject<any>;
  callback: () => void;
}

export const useClickOutside = ({ ref, callback }: Props) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
