<script>
export default {
  data() {
    return {
      msg: "Player List",
      players: [
        { name: "Taro", number:"3"} ,
        { name: "Jessie", number:"67" },
        { name: "Phil", number:"44" },
        { name: "Sundhar", number:"52" },
      ]
    }
  },
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div v-for="(item, index) in players" :key="index" class="grid">
    <label :for="'input'+index">{{ item.name }}</label>
    <input :id="'input'+index" v-model="item.number">
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 9fr;
}
</style>
