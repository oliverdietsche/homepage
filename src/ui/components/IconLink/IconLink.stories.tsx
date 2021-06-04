import { useTheme } from '../../../theme';
import { IconLink } from './IconLink';

export default {
  title: 'Components / IconLink',
  component: IconLink,
};

export const Default = () => (
  <IconLink
    icon="letter"
    text="oliver@dietsche.email"
    iconColor={useTheme().universalColors.primary}
    textColor="#101010"
    href="#"
  />
);
