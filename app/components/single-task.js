import Component from '@ember/component';
import { tagName } from '@ember-decorators/component';
import { action } from '@ember/object';

export default 
@tagName('')
class SingleTaskComponent extends Component {

    // Action for toggling the isComplete property between false and true
    @action 
    taskComplete(){
        this.task.isComplete = !this.task.isComplete
    }
}
