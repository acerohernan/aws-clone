import { PropsWithChildren, RefObject, useRef, useState } from 'react';
import Card, {
  CardBody,
  CardBodySection,
  CardFooter,
  CardHeader,
} from '../../../../components/Card';
import Icon from '../../../../components/Icon';
import Link from '../../../../components/Link';
import { useClickOutside } from '../../../../hooks/useClickOutside';

interface Props extends PropsWithChildren {
  title: string;
  subtitle?: string;
  footer?: string;
  footerOutside?: boolean;
  addInfoLink?: boolean;
  className?: string;
}

export const WidgetOptions = () => {
  const [open, setOpen] = useState(false);

  const ref: RefObject<any> = useRef(null);

  useClickOutside({ ref, callback: () => setOpen(false) });

  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative" ref={ref}>
      <button onClick={handleOpen} type="button">
        <Icon
          type="threedots"
          className="stroke-black-secondary hover:stroke-black-primary cursor-pointer"
        />
      </button>
      {open ? (
        <div className="container-shadow absolute bg-white-primary right-0 mt-1 whitespace-nowrap flex flex-col">
          <button
            className="text-sm px-5 py-1 border border-white-primary hover:bg-gray-primary hover:border-gray-forty text-start"
            type="button"
          >
            Change size
          </button>
          <button
            className="text-sm px-5 py-1 border border-white-primary hover:bg-gray-primary hover:border-gray-forty text-start"
            type="button"
          >
            Remove widget
          </button>
        </div>
      ) : null}
    </div>
  );
};

const Widget: React.FC<Props> = ({
  title,
  subtitle,
  footer,
  addInfoLink,
  footerOutside,
  children,
  className,
}) => {
  const bodySizeClass = footer ? 'h-[338px]' : 'h-[385px]';

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <button type="button">
            <Icon type="drag" className="stoke-gray-secondary" />
          </button>
          <div className="w-full ml-3 flex items-center gap-2">
            <h4 className="text-[18px] font-semibold">{title}</h4>
            {addInfoLink ? (
              <Link bold className="text-[12px]">
                Info
              </Link>
            ) : null}
          </div>
          <WidgetOptions />
        </div>
      </CardHeader>
      <CardBody className={`${bodySizeClass}`}>{children}</CardBody>
      {footer ? (
        <CardFooter>
          <div className="grid justify-center">
            <Link>{footer}</Link>
          </div>
        </CardFooter>
      ) : null}
    </Card>
  );
};

export const WidgetSection: React.FC<
  PropsWithChildren<{ isLast?: boolean; className?: string }>
> = (props) => {
  return <CardBodySection {...props} />;
};

export default Widget;
