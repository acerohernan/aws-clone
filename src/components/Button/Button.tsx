import Icon, { IconType } from '../Icon/Icon';

type Variants = 'primary' | 'secondary';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  iconStart?: IconType;
  iconEnd?: IconType;
}

type VariantClasses = {
  classNames: string;
  iconClassNames: string;
};

const variants: Record<Variants, VariantClasses> = {
  primary: {
    classNames:
      'bg-orange-primary hover:bg-orange-secondary text-white-primary',
    iconClassNames: 'stroke-white-primary',
  },
  secondary: {
    classNames:
      'bg-white-primary hover:bg-gray-secondary hover:text-black-primary text-black-secondary border border-black-secondary hover:border-black-primary',
    iconClassNames: 'stroke-black-secondary group-hover:stroke-black-primary',
  },
};

const Button: React.FC<Props> = ({
  variant,
  iconStart,
  iconEnd,
  children,
  className: propsClassName,
  type,
  ...props
}) => {
  const { classNames, iconClassNames } = variant
    ? variants[variant]
    : variants.primary;

  return (
    <button
      {...props}
      type={'button' || type}
      className={`${classNames} px-[20px] py-[6px] font-bold text-sm flex items-center gap-2 group rounded-sm ${propsClassName}`}
    >
      {iconStart ? <Icon type={iconStart} className={iconClassNames} /> : null}
      <span>{children}</span>
      {iconEnd ? <Icon type={iconEnd} className={iconClassNames} /> : null}
    </button>
  );
};

export default Button;
