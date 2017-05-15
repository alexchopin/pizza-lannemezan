<template>
  <section class="List" v-if="$route.params.category">
    <container>
      <h2 class="Title">{{ category.title }}</h2>
      <div class="Card" v-for="pizza in category.data">
        <product :product="pizza"/>
      </div>
    </container>
  </section>
</template>
<script>
import Product from '~components/Product'

export default {
  validate ({ params, store }) {
    return !params.category || store.state.plaques.some((group) => group.category === params.category)
  },
  computed: {
    category () { return this.$store.state.plaques.find((group) => group.category === this.$route.params.category) }
  },
  head () {
    return {
      title: 'Les Plaques - Pizza Au Feu De Bois - LANNEMEZAN',
      meta: [
        { hid: 'description', name: 'description', content: 'Commandez par téléphone vos plaques à la pizzeria PIZZA AU FEU DE BOIS à LANNEMEZAN. Plaques à emporter, à partir de 26.00€.' }
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
