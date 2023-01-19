import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`container-shadow bg-white-primary ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children }) => {
  return (
    <div className="py-3 px-5 bg-gray-secondary border-gray-thirdty border-y">
      {children}
    </div>
  );
};

export const CardBody: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return <div className={`p-5 overflow-auto ${className}`}>{children}</div>;
};

export const CardBodySection: React.FC<
  PropsWithChildren<{ isLast?: boolean; className?: string }>
> = ({ children, isLast, className }) => {
  return (
    <div
      className={` border-gray-thirdty ${
        isLast ? '' : 'border-b'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const CardFooter: React.FC<
  PropsWithChildren<{ className?: string }>
> = ({ children }) => {
  return (
    <div className="py-3 px-5 border-gray-thirdty border-y">{children}</div>
  );
};

export default Card;
