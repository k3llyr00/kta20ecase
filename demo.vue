<template>
  <div>
    <div class="columns">
      <div class="column is-four-fifths">
        <input class="input" type="text" v-model="newItem">
      </div>
      <div class="column is-one-fifths">
        <button class="button" @click="addItem">Add item</button>
      </div>
    </div>
    <h3 class="is-size-3">{{ reversed }}</h3>
    <h1 class="is-size-1">All items</h1>
    <ul>
      <li v-for="item in items" :key="item.key">
        <input type="checkbox" v-model="item.isDone">
        {{ item.name }}
      </li>
    </ul>

    <h1 class="is-size-1">Done items</h1>
    <ul>
      <li v-for="item in doneItems" :key="item.key">
        <input type="checkbox" v-model="item.isDone">
        {{ item.name }}
      </li>
    </ul>

    <h1 class="is-size-1">Not Done items</h1>
    <ul>
      <li v-for="item in notDoneItems" :key="item.key">
        <input type="checkbox" v-model="item.isDone">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [],
  data(){
    return {
      newItem: '',
      items: [
        {name:'Sai', isDone: false, key: 0},
        {name:'Leib', isDone: true, key: 1},
        {name:'Õlu', isDone: false, key: 2},
        {name:'Piim', isDone: true, key: 3},
        {name:'Komm', isDone: false, key: 4},
      ]
    }
  },
  methods: {
    addItem() {
      if(this.newItem.trim() != ''){
        this.items.push({name:this.newItem, isDone: false, key: this.items.length});
      }
      this.newItem = '';
    }
  },
  computed: {
    // "hello" ['h', 'e', 'l', 'l', 'o'] 'olleh'
    reversed(){
      return this.newItem.split('').reverse().join('');
    },
    doneItems(){
      // return this.items.filter(function (item) {
      //     return item.isDone;
      // });
      // return this.items.filter(item => {
      //   return item.isDone;
      // });
      return this.items.filter(item => item.isDone);
    },
    notDoneItems(){
      return this.items.filter(item => !item.isDone);
    }
  }
}
</script>

<style>
</style>