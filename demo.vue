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
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [],
  data(){
    return {
      newItem: '',
      items: ['Sai', 'Leib', 'Õlu', 'Piim', 'Komm']
    }
  },
  methods: {
    addItem() {
      if(this.newItem.trim() != ''){
        this.items.push(this.newItem);
      }
      this.newItem = '';
    }
  } 
}
</script>

<style>

</style>