<template>
  <section class="Header">
    <container>
      <logo/>
      <h1 class="Header__Title">Pizza au feu de bois</h1>
    </container>
  </section>
</template>

<script>
import Logo from '~components/LogoH'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.Header
{
  text-align: center;
  padding: 100px 0;
  padding-top: 184px;
  // background-color: #252e38;
  .Logo--horizontal
  {
    width: 100%;
    max-width: 600px;
  }
  &__Title
  {
    height: 0;
    margin: 0;
    width: 0;
    overflow: hidden;
  }
}
</style>
