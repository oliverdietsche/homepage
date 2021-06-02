import { useTheme } from '../../../theme';
import { TextBlock } from './TextBlock';

export default {
  title: 'Components / TextBlock',
  component: TextBlock,
};

export const Default = () => (
  <TextBlock
    palette={useTheme().primaryPalette}
    title="– Introduction"
    heading="Software Developer, currently in Switzerland, soon all around the world."
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  />
);
