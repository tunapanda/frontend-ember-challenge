import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @tracked pinnedTask;

    // A function that takes task to be pinned
    @action
    pinTask(task) {
        this.pinnedTask = task.toJSON();
    }
}
