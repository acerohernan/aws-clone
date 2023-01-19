import { PropsWithChildren } from 'react';
import Icon from '../Icon';

// type Variant = 'info';

const Message: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="border border-skyblue-secondary bg-skyblue-thirdty items-start lg:items-center grid grid-cols-[16px_1fr_16px] gap-2 py-3 px-5">
      <Icon type="info" className="stroke-skyblue-secondary" />
      <div>{children}</div>
      <button className="group" type="button">
        <Icon
          type="xmark"
          className="stroke-black-secondary group-hover:stroke-black-primary mt-1 ml-2 lg:mt-0"
        />
      </button>
    </div>
  );
};

export default Message;
