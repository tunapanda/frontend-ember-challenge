import Controller from "@ember/controller";

export default class IndexController extends Controller {
  get completedTasks() {
    return this.model.filter((task) => task.isComplete).length;
  }
}
