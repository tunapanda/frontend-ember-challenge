import Controller from '@ember/controller';


export default Controller.extend({
    actions: {
        pinned() {
            this.set('pinnedTask', arguments[0]);
        }
    },
    pinnedTask: false
});