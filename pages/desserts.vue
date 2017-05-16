<template>
  <section class="List">
    <container>
      <h2 class="Title">Les desserts</h2>
      <row>
        <column sm="6" md="4" v-for="dessert in desserts" :key="dessert.name">
          <div class="Card">
            <product :product="dessert"/>
          </div>
        </column>
      </row>
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
