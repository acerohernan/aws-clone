import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="w-full h-[40px] bg-black-thirdty" />
      <div className="w-full h-[40px] bg-white-primary container-shadow hidden" />
      <div className="mb-[52px]">{children}</div>
      <div className="w-full h-[52px] bg-black-thirdty fixed bottom-0 z-10" />
    </div>
  );
};

export default Layout;
