<template>
  <div>
    <div class='' v-for="address in addresses" :key="address.name">
      <div class='content'>
        <div class='header'>
          {{ address }}
        </div>
        <div class='meta'>

        </div>
      </div>
    </div>
  </div>
</template>

<script type = "text/javascript" >
export default {
  props: ['addresses'],
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
