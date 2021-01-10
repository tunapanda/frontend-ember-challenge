import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @tracked pinnedTask = null;

    @action
    receivedPinAction() {
        if(this.pinnedTask == null) { // pin a task if there is no current pinned task
            this.pinnedTask = arguments[0];
        } else if(this.pinnedTask.id == arguments[0].id){ // unpinning a task
            this.pinnedTask = null;
        } else { // replacing the current pinned task
            this.pinnedTask.isNotPinned = true;
            this.pinnedTask = arguments[0];
        }
    }

    @computed("model.@each.isComplete")
    get completedTasks() {
        return this.model.filterBy('isComplete', true).length;
    }
}
