<template>
  <section class="Navbar">
    <container>
      <row>
        <column sm="4">
          <nuxt-link class="Link" to="/pizzas">
            <div class="Link__Box">
              <pizza/> PIZZAS
            </div>
          </nuxt-link>
        </column>
        <column sm="4">
          <nuxt-link class="Link" to="/plaques">
            <div class="Link__Box">
              <pizzas/> PLAQUES
            </div>
          </nuxt-link>
        </column>
        <column sm="4">
          <nuxt-link class="Link" to="/desserts">
            <div class="Link__Box">
              <cake/> DESSERTS
            </div>
          </nuxt-link>
        </column>
      </row>
    </container>
  </section>
</template>

<script>
import Pizza from '~components/Icons/Pizza'
import Pizzas from '~components/Icons/Pizzas'
import Cake from '~components/Icons/Cake'

export default {
  components: {
    Pizza,
    Pizzas,
    Cake
  }
}
</script>

<style lang="scss">
.Navbar
{
  background-color: #252e38;
  padding-bottom: 12px;
  padding-top: 0;
  .Link
  {
    color: #ddd;
    border: 1px solid lighten(#252e38, 10%);
    &:hover
    {
      background-color: lighten(#252e38, 5%);
    }
  }
  .nuxt-link-active, .nuxt-link-active:hover
  {
    background-color: lighten(#252e38, 10%);
  }
}
</style>
