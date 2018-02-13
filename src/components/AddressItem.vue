<template>
  <p class='content'>
    {{ address.name }}
    <em class='label'>
      :
    </em>
    <span class='desc'>
    </span>
  </p>
</template>

<script>
export default {
  props: ['address']
}
</script>
