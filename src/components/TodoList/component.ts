import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Todo } from '@/store/modules/todo/types';
import Template from './template.vue';

const namespace: string = 'todoModule';

@Component({
  mixins: [Template]
})
export default class TodoForm extends Vue {
  @Prop({
    type: Array,
    required: true
  }) todos!: Todo[];

  @Action('updateTodoStatus', { namespace }) updateTodoStatus!: Function;
  @Action('deleteTodo', { namespace }) deleteTodo!: Function;

  public fields: Array<{ key: string, label: string, sortable?: boolean }> = [
    { key: 'text', label: 'Todo', sortable: true },
    { key: 'done', label: 'Estado' },
    { key: 'actions', label: 'Actions' }
  ];

} 