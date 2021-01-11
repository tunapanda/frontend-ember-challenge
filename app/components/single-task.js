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
    this.isPinned = !this.isPinned;
  }
}
