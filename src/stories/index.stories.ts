import { storiesOf, moduleMetadata } from '@storybook/angular';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from 'src/app/core/components/header/header.component';

import { WorklogComponent } from 'src/app/worklog/components/worklog/worklog.component';
import { DevelopersListComponent } from 'src/app/team-members/pages/developers-list/developers-list.component';
import { action } from '@storybook/addon-actions';

storiesOf('Colors', module)
    .addDecorator(
        moduleMetadata({
            imports: [HttpClientModule],
            declarations: [HeaderComponent]
        })
    )
    .add('Color 1', () => {
        return {
            props: {text: '😀 😎 👍 💯',
            onClick: action('This was clicked OMG')}
        };
    }
    )
    .add('Color2', () => ({
        props: {text: '😀 😎 👍 💯',
            onClick: action('This was clicked OMG')}
    }));

storiesOf('Team Component', module)
    .add('to Storybook', () => ({
        component: DevelopersListComponent,
        props: {}
    }));
