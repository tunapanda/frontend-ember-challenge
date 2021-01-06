import Component from '@ember/component';
import {
  action
} from '@ember/object';

export default

class SingleTaskComponent extends Component {
  @action
  pin_task() {
    this.onSentUp(this.task);
  }

  @action
  toggle_task() {
    this.task.isComplete = !this.task.isComplete;
  }
}
