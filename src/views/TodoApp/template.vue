<template>
  <div>
    <div v-if="!errorLoadingTodos">
      <b-row class="my-5">
        <todo-form class="mx-auto"/>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="text-center text-muted">Todos pending</h2>
          <todo-list :todos="todos"/>
        </b-col>

        <b-col>
          <h2 class="text-center text-muted">Todos finished</h2>
          <todo-list :todos="done"/>
        </b-col>
      </b-row>
    </div>
    <div v-else class="alert alert-danger text-center">
      Error cargando los todos
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>