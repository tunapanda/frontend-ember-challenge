import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class IndexController extends Controller {
  @tracked pinnedTask = null;

  get completedTasks() {
    return this.model.filter((task) => task.isComplete).length;
  }

  @action
  setPinned(task) {
    this.pinnedTask = task;
  }
}
