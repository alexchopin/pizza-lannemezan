<template>
  <nav class="Topbar">
    <container>
      <row middle-xs>
        <column xs="5">
          <div class="Topbar__Info">
            <phone/>05.62.98.16.16
          </div>
        </column>
        <column xs="2">
          <row center-xs middle-xs>
            <nuxt-link to="/" class="Topbar__Logo">
              <logo/>
            </nuxt-link>
          </row>
        </column>
        <column xs="5">
          <div class="Topbar__Info Topbar__Info--right">
            <nuxt-link to="/panier">
              {{ total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }) }}<basket/>
            </nuxt-link>
          </div>
        </column>
      </row>
    </container>
  </nav>
</template>

<script>
import Phone from '@/components/Icons/App'
import Basket from '@/components/Icons/Store'
import Logo from '@/components/Logo'

export default {
  computed: {
    total () {
      return this.$store.getters.getTotal
    }
  },
  components: {
    Phone,
    Basket,
    Logo
  }
}
</script>

<style lang="scss">
.Topbar
{
  top: 0;
  left: 0;
  width: 100%;
  // position: absolute;
  position: fixed;
  background-color: #252e38;
  border-bottom: 1px solid lighten(#252e38, 10%);
  height: 64px;
  &__Info
  {
    display: flex;
    color: #ddd;
    align-items: center;
    padding: 0 10px;
    font-size: 18px;
    .Icons--app
    {
      float: left;
      height: 28px;
      margin-right: 10px;
    }
    .Icons--store
    {
      float: right;
      height: 24px;
      margin-left: 10px;
    }
    a
    {
      color: #ddd;
      text-decoration: none;
    }
    &--right
    {
      justify-content: flex-end;
    }
  }
  &__Logo
  {
    padding-top: 4px;
    display: inline-block;
    .Logo
    {
      height: 44px;
    }
  }
}
</style>
