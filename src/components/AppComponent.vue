<template>
    <div class="counter">
        Value: {{ count }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
        <div>
            <div>Recent History (last 5 entries): {{ recentHistory }}</div>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: mapGetters([
      'count',
      'recentHistory'
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
  }
</script>

<style lang="less">
    .input-todo-form {
        .input-todo {
            width: 200px;
        }
        button {
            width: 50px;
        }
    }


    ul {
        list-style: none;
        padding: 0;
    }

    .todo-item {
        margin: 15px 0;

        p {
            display: inline-block;
            width: 200px;
            font-weight: bold;
        }

        button {
            width: 100px;
            color: #ffffff;
        }

        button.complete {
            background-color: #b2b2b2;
        }

        button.complete.completed {
            background-color: #5ddf0f;
        }

        button.delete {
            background-color: #dc143c;
        }
    }
</style>