<template>
  <div id="Home">
    <section class="PizzaDuMois">
      <pizza-du-mois/>
    </section>
  </div>
</template>

<script>
import PizzaDuMois from '~components/PizzaDuMois'

export default {
  components: {
    PizzaDuMois
  }
}
</script>
<style lang="scss">
.PizzaDuMois
{
  background-color: lighten(#252e38, 80%);
}
</style>
