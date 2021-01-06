import Component from '@ember/component';
import {
  tagName
} from '@ember-decorators/component';
import {
  action
} from '@ember/object';

export default 
@tagName('')
class SingleTaskComponent extends Component {
  @action
  pin_task() {
    this.onSentUp(this.task);
  }
}