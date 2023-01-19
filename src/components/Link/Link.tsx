import { PropsWithChildren } from 'react';

type Size = 'xs' | 'sm' | 'md';

interface Props extends PropsWithChildren {
  size?: Size;
  bold?: boolean;
  className?: string;
}

const Link: React.FC<Props> = ({ children, size, bold, className }) => {
  const textSize = `text-${size || 'sm'}`;

  return (
    <span
      className={`${textSize}
      ${bold ? 'font-bold' : ''}
      text-skyblue-primary hover:underline cursor-pointer
      ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Link;
