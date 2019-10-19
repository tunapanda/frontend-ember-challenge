import Component from '@ember/component';

export default Component.extend({
    actions: {
        receivedHere() {
            this.onSentUp(arguments[0]);
        }
    }
});