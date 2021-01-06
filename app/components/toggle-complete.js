import Component from '@ember/component';
import {
  action
} from '@ember/object';

export default
class TaskListComponent extends Component {
    @action
    toggled() {
        this.onToggled();
    }
}
