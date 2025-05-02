import type { ReactElement } from 'react';

type IconProps<Props = {}> = {
  size?: '56' | '24' | '20' | '16';
  color?: string;
} & Props;

type PolymorphicIconComponent<Props = {}> = (props: IconProps<Props>) => ReactElement;

export default function withPolymorphicIcon<Props = {}>(
  IconComponent: (props: Omit<IconProps<Props>, 'color'>) => ReactElement,
): PolymorphicIconComponent<Props> {
  return (props: IconProps<Props>) => {
    const defaultSize = props.size || '24';

    return (
      <span
        style={{
          color: props.color,
        }}
      >
        <IconComponent size={defaultSize} {...props} />
      </span>
    );
  };
}
