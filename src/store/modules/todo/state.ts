import { TodoState } from '@/store/modules/todo/types';

export const state: TodoState = {
  todos: [],
  error: false,
  errorMessage: ''
}