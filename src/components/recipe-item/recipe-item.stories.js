import './recipe-item';
import {
  storiesOf,
  html,
} from '@open-wc/demoing-storybook';

storiesOf('Demo|Example Element', module)
  .add(
    'Alternative Header',
    () => html`
      <recipe-item multiple></recipe-item>
    `,
  );