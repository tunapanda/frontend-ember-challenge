import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action,computed } from '@ember/object';


export default class IndexController extends Controller {
    // Tracking the pinnedTrack object
    @tracked pinnedTask;
    
    // Action that gets a task from the single task component after the user pins the task
    @action
    pinTask(task) {
        this.pinnedTask = task.toJSON();
    }

    @action
    taskComplete(){
        this.pinnedTask.isComplete = true;
    }

    // Computed property that automatically counts the number of completed tasks
    @computed('model.@each.isComplete')
    get completedTasks() {
        const n = this.model.filterBy('isComplete', true).get('length');
        return n
    }
}
