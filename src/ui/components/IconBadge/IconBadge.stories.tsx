import { css } from '@emotion/react';
import { IconBadge } from './IconBadge';

export default {
  title: 'Components / IconBadge',
  component: IconBadge,
};

export const Default = () => (
  <div
    css={css`
      display: inline-block;
    `}
  >
    <IconBadge
      icon="typescript"
      title="TypeScript"
      contentColor="#FFFFFF"
    />
  </div>
);
