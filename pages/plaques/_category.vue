<template>
  <section class="List" v-if="$route.params.category">
    <container>
      <h2 class="Title">{{ category.title }}</h2>
      <row>
        <column sm="6" md="4" v-for="plaque in category.data" :key="plaque.name">
          <div class="Card">
            <product :product="plaque"/>
          </div>
        </column>
      </row>
    </container>
  </section>
</template>
<script>
import Product from '@/components/Product'

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
