<template>
  <section class="List">
    <container>
      <h2 class="Title">Les desserts</h2>
      <div class="Card" v-for="dessert in desserts">
        <product :product="dessert"/>
      </div>
    </container>
  </section>
</template>
<script>
import Product from '~components/Product'

export default {
  computed: {
    desserts () { return this.$store.state.desserts }
  },
  head () {
    return {
      title: 'Les Desserts - Pizza Au Feu De Bois - LANNEMEZAN',
      meta: [
        { hid: 'description', name: 'description', content: 'Commandez par téléphone vos desserts à la pizzeria PIZZA AU FEU DE BOIS à LANNEMEZAN. Desserts à emporter, à partir de 12.00€.' }
      ]
    }
  },
  components: {
    Product
  }
}
</script>
<style lang="scss">
.List
{
  background-color: lighten(#252e38, 80%);
  border-top: 1px solid lighten(#252e38, 70%);
}
</style>
