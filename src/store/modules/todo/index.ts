import { Module } from 'vuex';
import { state } from './state';
import { TodoState } from './types';
import { RootState } from '@/store/types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const namespaced: boolean = true;

export const todoModule: Module<TodoState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}