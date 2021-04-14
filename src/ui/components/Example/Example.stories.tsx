import { Example as ExampleComponent } from './Example';

export default {
  title: 'Components/Example',
  component: ExampleComponent,
};

export const Example = () => (
  <ExampleComponent text="TextPropertyValue" />
);
