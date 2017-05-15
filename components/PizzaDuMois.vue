<template>
  <container>
    <h2 class="Title">La pizza du mois</h2>
    <row class="Card Card--mois" center-xs>
      <column sm="4">
        <img :src="'/images/' + pizza.image" alt="Pizza du mois" class="Card__Image">
      </column>
      <column sm="8">
        <product :product="pizza"/>
      </column>
    </row>
  </container>
</template>

<script>
import Product from '~components/Product'

export default {
  computed: {
    pizza () { return this.$store.state.pizzaDuMois }
  },
  components: {
    Product
  }
}
</script>

<style lang="scss">
.Card--mois
{
  .Product__Title
  {
    padding-bottom: 15px;
  }
  .Product__Description
  {
    padding-bottom: 10px;
  }
}
</style>
