import DS from 'ember-data';
const { Model, attr } = DS;

export default class TaskModel extends Model {
  @attr('string')
  name

  @attr('string')
  description

  @attr('boolean')
  isComplete

  @attr('boolean', { defaultValue: true })
  isNotPinned
}
