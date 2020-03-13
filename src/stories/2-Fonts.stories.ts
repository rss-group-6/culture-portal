import { WorklogComponent } from 'src/app/worklog/components/worklog/worklog.component';

export default {
  title: 'Font',
  component: WorklogComponent,
};

export const ToStorybook = () => ({
  component: WorklogComponent,
  props: {},
});

ToStorybook.story = {
  name: 'Worklog',
};
