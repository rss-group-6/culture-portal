import { DevelopersListComponent } from 'src/app/team-members/pages/developers-list/developers-list.component';

export default {
  title: 'Input',
  component: DevelopersListComponent,
};

export const ToStorybook = () => ({
  component: DevelopersListComponent,
  props: {},
});

ToStorybook.story = {
  name: 'Worklog',
};
