import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class IndexController extends Controller {
    // Tracking the pinnedTrack object
    @tracked pinnedTask;
    
    // Action that gets a task from the single task component after the user pins the task
    @action
    pinTask(task) {
        this.pinnedTask = task.toJSON();
    }
}
