import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ToggleCompleteComponent extends Component {

    @action
    onclick(){
        this.args.onChange()

    }
}
