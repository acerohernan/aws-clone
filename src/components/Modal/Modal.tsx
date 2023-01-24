import { PropsWithChildren } from 'react';
import Button from '../Button';
import Card, { CardBody, CardFooter, CardHeader } from '../Card';
import Icon from '../Icon';
import { ModalInheritProps } from './types';

interface Props extends PropsWithChildren, ModalInheritProps {
  title?: string;
  dismissText?: string;
  actionText?: string;
  action?: () => void;
}

const Modal: React.FC<Props> = ({
  onDismiss,
  children,
  title,
  actionText,
  dismissText,
  action,
}) => {
  return (
    <Card className="w-full max-w-[820px]  mx-auto relative z-30 overflow-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="w-full flex items-center gap-2">
            <h4 className="text-[18px] font-semibold">
              {title ?? 'Modal title'}
            </h4>
          </div>
          <button onClick={onDismiss} type="button">
            <Icon
              type="xmark"
              className="stroke-black-secondary hover:stroke-black-primary"
            />
          </button>
        </div>
      </CardHeader>
      <CardBody className="overflow-auto max-h-[calc(100vh_-_165px)]">
        {children}
      </CardBody>

      <CardFooter>
        <div className="w-full flex gap-2 justify-end">
          <Button variant="secondary" onClick={onDismiss}>
            {dismissText ?? 'Cancel'}
          </Button>
          <Button onClick={action}>{actionText ?? 'Continue'}</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Modal;
