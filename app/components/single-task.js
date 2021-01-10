import Component from '@ember/component';
import { tagName } from '@ember-decorators/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default 
@tagName('')
class SingleTaskComponent extends Component {
    @tracked isPinned;

    constructor() {
        super(...arguments);
        this.isPinned = false;
    }

    @action
    togglePin() {
        this.isPinned = !this.isPinned;
        this.task.isNotPinned = !this.isPinned;
        this.onPinSentUp(this.task);
    }

    @action
    toggleComplete() {
        this.task.isComplete = !this.task.isComplete;
    }
}
