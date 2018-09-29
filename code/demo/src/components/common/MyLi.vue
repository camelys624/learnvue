<template>
    <li>
      <slot></slot>
    </li>
</template>

<script>
export default {
  name: 'my-li'
}
</script>

<style scoped>
  li{
    list-style: none;
    float: left;
    width: 33.3%;
    height: 100px;
    text-align: center;
  }
</style>
