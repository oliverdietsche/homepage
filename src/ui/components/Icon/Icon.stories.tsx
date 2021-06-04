/* eslint-disable no-new-func */
/* eslint-disable @typescript-eslint/no-implied-eval */
import { ICONS } from './const';
import { Icon, IIconProps } from './Icon';

export default {
  title: 'Components / Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: Object.keys(ICONS),
      control: { type: 'select' },
    },
  },
};

export const Interactive = (args: IIconProps) => (
  <Icon {...args} />
);

Interactive.args = ((): IIconProps => ({
  icon: 'instagram',
  size: 30,
}))();
