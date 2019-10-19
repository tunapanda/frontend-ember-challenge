import Controller from '@ember/controller';
import { computed } from '@ember/object';


export default Controller.extend({
    actions: {
        pinned() {
            this.set('pinnedTask', arguments[0]);
        }
    },
    pinnedTask: false,
    completedTasks: computed('model.@each.isComplete', function () {
        return this.model.filterBy('isComplete', true).length;
    })
});