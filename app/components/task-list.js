import Component from '@ember/component';
import {
  action
} from '@ember/object';

export default 
class SingleTaskComponent extends Component {
  @action
  recievedAction() {
    this.onSentUp(arguments[0]);
  }
}