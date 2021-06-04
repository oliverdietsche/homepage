import { useTheme } from '../../../theme';
import { IconFact } from './IconFact';

export default {
  title: 'Components / IconFact',
  component: IconFact,
};

export const Default = () => (
  <IconFact
    icon="plane"
    text="3 weeks internship at Ocere in Cheltenham"
    iconColor={useTheme().universalColors.primary}
    textColor="#101010"
  />
);
