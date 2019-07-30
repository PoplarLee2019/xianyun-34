<template>
  <div class="content">
    <div class="ctrl">
      <span
        v-for="(item, index) in [`篮球`,`足球`, `桌球`]"
        :key="index"
        @click="handleClick( index )"
        :class="{ active: abc === index  }">
        {{item}}
        </span>
    </div>
    <div v-if="abc === 0">
      <p>姚明</p>
      <p>易建联</p>
      <p>奥尼奥</p>
    </div>
    <div v-if="abc === 1">
      <p>朗拿度</p>
      <p>朗拿度</p>
      <p>朗拿度</p>
    </div>
    <div v-if="abc === 2">
      <p>丁俊晖</p>
      <p>丁俊晖</p>
      <p>丁俊晖</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      abc: 0
    }
  },
  methods: {
      handleClick(index) {
          this.abc = index;
      }
  }
};
</script>
<style>
.active {
  color: red;
  border-color: red;
}

.content {
  margin: 50px;
}

.ctrl {
  margin-bottom: 20px;
}

.ctrl span {
  cursor: pointer;
  margin: 0 5px;
  padding: 5px;
  border: 1px #ddd solid;
}
</style>
