import { useTheme } from '../../../theme';
import { Card } from './Card';

export default {
  title: 'Components / Card',
  component: Card,
};

export const Default = () => (
  <Card
    title="autofiles"
    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    palette={useTheme().secondaryPalette}
    icons={['typescript', 'javascript']}
  />
);
