<template>
  <section class="List">
    <container v-if="$route.params.category">
      <h2 class="Title">{{ category.title }}</h2>
      <row>
        <column sm="6" md="4" v-for="pizza in category.data" :key="pizza.name">
          <div class="Card">
            <product :product="pizza"/>
          </div>
        </column>
      </row>
    </container>
    <pizza-du-mois v-else/>
  </section>
</template>
<script>
import Product from '@/components/Product'
import PizzaDuMois from '@/components/PizzaDuMois'

export default {
  validate ({ params, store }) {
    return !params.category || store.state.pizzas.some((group) => group.category === params.category)
  },
  computed: {
    category () { return this.$store.state.pizzas.find((group) => group.category === this.$route.params.category) }
  },
  head () {
    return {
      title: 'Les Pizzas - Pizza Au Feu De Bois - LANNEMEZAN',
      meta: [
        { hid: 'description', name: 'description', content: 'Commandez par téléphone vos pizzas à la pizzeria PIZZA AU FEU DE BOIS à LANNEMEZAN. Pizzas à emporter, à partir de 4.00€.' }
      ]
    }
  },
  components: {
    Product,
    PizzaDuMois
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
