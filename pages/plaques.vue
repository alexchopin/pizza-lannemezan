<template>
  <div id="Pizzas">
    <section class="Categories">
      <container>
        <h2 class="Title">Catégories</h2>
        <row>
          <column sm="6">
            <nuxt-link class="Link" to="/plaques/salees">
              <div class="Link__Box">
                <salt/>Les salées
              </div>
            </nuxt-link>
          </column>
          <column sm="6">
            <nuxt-link class="Link" to="/plaques/sucrees">
              <div class="Link__Box">
                <suggar/>Les sucrées
              </div>
            </nuxt-link>
          </column>
        </row>
      </container>
    </section>
    <nuxt-child/>
  </div>
</template>

<script>
import Salt from '@/components/Icons/Salt'
import Suggar from '@/components/Icons/Suggar'

export default {
  components: {
    Salt,
    Suggar
  }
}
</script>

<style lang="scss">
.Categories
{
  .Title
  {
    padding-bottom: 30px;
  }
  .Icons.Icons--calendar
  {
    height: 24px;
    margin-top: 10px;
  }
  .nuxt-link-active, .nuxt-link-active:hover
  {
    background-color: lighten(#252e38, 70%);
  }
}
</style>
