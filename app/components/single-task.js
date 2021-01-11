import Component from "@ember/component";
import { tagName } from "@ember-decorators/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default
@tagName("")
class SingleTaskComponent extends Component {
  @tracked isPinned = false;

  @action
  togglePinned() {
    if (this.isPinned) {
      this.setPinned(null);
      this.isPinned = false;
    } else {
      this.setPinned(this.task);
      this.isPinned = true;
    }
  }

  @action
  toggleComplete() {
    this.task.isComplete = !this.task.isComplete;
  }
}
