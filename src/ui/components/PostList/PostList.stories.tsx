import { useTheme } from '../../../theme';
import { PostList } from './PostList';

export default {
  title: 'Components / PostList',
  component: PostList,
};

export const Default = () => (
  <PostList
    posts={[
      {
        slug: 'awesome-post',
        title: 'Awesome Post',
        author: { name: 'Oliver Dietsche' },
      },
      {
        slug: 'awesome-post-2',
        title: 'Awesome Post',
        author: { name: 'Oliver Dietsche' },
      },
      {
        slug: 'awesome-post-3',
        title: 'Awesome Post',
        author: { name: 'Oliver Dietsche' },
      },
    ]}
    palette={useTheme().primaryPalette}
  />
);
