import Component from '@ember/component';
import {
  tagName
} from '@ember-decorators/component';
import {
  action
} from '@ember/object';

export default
@tagName('')

class TaskListComponent extends Component {
    @action
    receivedAction() {
        this.onSentUp(arguments[0]);
    }
}
