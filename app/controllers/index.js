import Controller from '@ember/controller';
import {action} from '@ember/object';
import {filterBy} from '@ember/object/computed';

export default class IndexController extends Controller {

  isPinnedTask = false;

  @action
  toggleTaskPin(task) {
    task.toggleProperty('isPinned');
  }

  @filterBy('model', 'isPinned', true) pinnedTasks; //computed property using filterBy decorator


  get unpinnedTasks() {
    /**
     * Filter unpinned tasks from tasks model
     * returns @computed property : all task where isPinned key doesn't exit or it's value is false
     */
    return [...this.model.filterBy('isPinned', undefined),
      ...this.model.filterBy('isPinned', false)];
  }

  get completedTasks() {
    /**
     * Get the total count of completed tasks
     * returns @number: count of all tasks marked as complete
     */
    return this.model.filterBy('isComplete').length;
  }
}
