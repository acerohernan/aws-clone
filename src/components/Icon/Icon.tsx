import React from 'react';
import DragIcon from './icons/DragIcon';
import InfoIcon from './icons/InfoIcon';
import OutsideIcon from './icons/OutsideIcon';
import PlusIcon from './icons/Plus';
import ThreeDotsIcon from './icons/ThreeDots';
import { IconProps } from './icons/types';
import XMarkIcon from './icons/XMark';

export type IconType =
  | 'plus'
  | 'xmark'
  | 'threedots'
  | 'drag'
  | 'info'
  | 'outside';

interface Props {
  type: IconType;
  className?: string;
}

const iconMap: Record<IconType, React.FC<IconProps>> = {
  plus: PlusIcon,
  xmark: XMarkIcon,
  threedots: ThreeDotsIcon,
  drag: DragIcon,
  info: InfoIcon,
  outside: OutsideIcon,
};

const Icon: React.FC<Props> = ({ type, className }) => {
  const IconSelected = iconMap[type];

  return <IconSelected className={className} />;
};

export default Icon;
