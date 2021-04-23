<template>
  <li :class="task.completed ? 'completed' : null">
    <div class="form-check">
      <label class="form-check-label">
        <input v-model="task.completed" class="checkbox" type="checkbox">
        {{task.title}}<i class="input-helper"></i>
      </label>
    </div>
    <i @click="$store.commit('task/deleteTask', task.id)" class="remove mdi mdi-close-circle-outline"></i>
  </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    }
}
</script>
