import Component from '@ember/component';

export default Component.extend({
    actions: {
        pin_clicked() {
            this.onSentUp(this.task);
        },
        toggle() {
            this.task.isComplete ? this.task.isComplete = false : this.task.isComplete = true;
        }
    }
});