import Component from '@ember/component';

export default Component.extend({
    actions: {
        pin_clicked() {
            this.onSentUp(this.task);
        }
    }
});