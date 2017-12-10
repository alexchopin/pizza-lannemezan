<template>
  <section class="Navbar">
    <container>
      <row>
        <column sm="6">
          <nuxt-link class="Link" to="/pizzas">
            <div class="Link__Box">
              <pizza/> PIZZAS
            </div>
          </nuxt-link>
        </column>
        <column sm="6">
          <nuxt-link class="Link" to="/plaques">
            <div class="Link__Box">
              <pizzas/> PLAQUES
            </div>
          </nuxt-link>
        </column>
      </row>
    </container>
  </section>
</template>

<script>
import Pizza from '@/components/Icons/Pizza'
import Pizzas from '@/components/Icons/Pizzas'
import Cake from '@/components/Icons/Cake'

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
  // background-color: #252e38;
  padding-bottom: 12px;
  padding-top: 0;
  .Link
  {
    color: #ddd;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px #252e38;
    border: 1px solid lighten(#252e38, 40%);
    &:hover
    {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
  .nuxt-link-active, .nuxt-link-active:hover
  {
    background-color: rgba(255, 255, 255, 0.25);
  }
}
</style>
