import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class IndexController extends Controller {

  isPinnedTask=false;

  @action
  toggleTaskPin(task) {
    task.toggleProperty('isPinned');
  }
}
