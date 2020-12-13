<template>
  <div>
    HOME
  </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                {
                    done: false,
                    text: 'Foobar',
                },
                {
                    done: false,
                    text: 'Fizzbuzz',
                },
            ],
            newTask: null
        }
    },
    methods: {
        create() {
            this.tasks.push({
                done: false,
                text: this.newTask,
            })

            this.newTask = null
        }
    },
    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
    }
}
</script>

<style>

</style>