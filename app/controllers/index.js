import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action,computed,set } from '@ember/object';


export default class IndexController extends Controller {
    // Tracking the pinnedTrack object
    @tracked pinnedTask;
    
    // Action that gets a task from the single task component after the user pins the task
    @action
    pinTask(task) {
        this.pinnedTask = task.toJSON();
    }

    // Action that toggles the is complete property between true and false
    @action
    taskCompleted(){
        
        if (this.pinnedTask.isComplete == false ){

            set(this.pinnedTask,"isComplete", true)

        } else{

            set(this.pinnedTask,"isComplete", false)
        }
    }

    // Computed property that automatically counts the number of completed tasks
    @computed('model.@each.isComplete')
    get completedTasks() {
        const n = this.model.filterBy('isComplete', true).get('length');
        return n
    }
}
