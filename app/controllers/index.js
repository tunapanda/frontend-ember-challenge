import Controller from '@ember/controller';
import {
  action
} from '@ember/object';
import { computed } from '@ember/object';

export default class IndexController extends Controller {
    @action
    pinned() {
        this.set('pinnedTask', arguments[0]);
    }

    @computed('model.@each.isComplete')
    get completedTasks() {
        return this.model.filterBy('isComplete', true).length;
    }
}
