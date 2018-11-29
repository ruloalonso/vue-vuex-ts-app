import { Component, Vue } from "vue-property-decorator";
import TodoForm from '@/components/TodoForm/component';
import TodoList from '@/components/TodoList/component';
import { Action, Getter, State } from 'vuex-class';
import { Todo } from '@/store/modules/todo/types';
import Template from './template.vue';
const namespace: string = 'todoModule';

@Component({
  components: {
    TodoList, TodoForm
  },
  mixins: [Template]
})
export default class TodoApp extends Vue {
  @Action('fetchData', {namespace}) fetchData!: Function;
  @Getter('todos', {namespace}) todos!: Todo[];
  @Getter('done', {namespace}) done!: Todo[];
  @State('error', {namespace}) errorLoadingTodos!: boolean;
  @State('errorMessage', {namespace}) errorMessage!: string;

  mounted() {
    this.fetchData();
  }
}