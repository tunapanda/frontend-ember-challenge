import Component from '@ember/component';
import {
  action
} from '@ember/object';

export default
class TaskListComponent extends Component {
    @action
    receivedAction() {
        this.onSentUp(arguments[0]);
    }
}
