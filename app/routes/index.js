import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return [
      this.store.createRecord('task', {
        id: 1,
        name: 'Solve all github issues',
        description: 'Solve the world\'s Github issues.',
        isComplete: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 2,
        name: 'A task',
        description: 'This is a task.',
        isComplete: false,
        creator: 2
      }),
      this.store.createRecord('task', {
        id: 3,
        name: 'Clean the kitchen',
        description: 'It\'s filthy!',
        isComplete: false,
        creator: 2
      })
    ];
  }
}
