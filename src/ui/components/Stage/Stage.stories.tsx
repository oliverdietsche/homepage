import { useTheme } from '../../../theme';
import { Stage } from './Stage';

export default {
  title: 'Components / Stage',
  component: Stage,
};

export const Default = () => (
  <Stage
    palette={useTheme().primaryPalette}
    name="Oliver Dietsche."
  />
);
