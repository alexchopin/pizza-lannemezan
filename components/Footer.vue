<template>
  <footer class="Footer">
    <section class="Footer__Infos">
      <container>
        <row center-xs>
          <column sm="6" md="4">
            <h3 class="Footer__Infos__Title">Horaires</h3>
            <ul class="Footer__Infos__List">
              <li v-for="(value, key) in horaires" class="Footer__Infos__List__Row">
                <span class="Footer__Infos__List__Row__Title">{{ key }}</span> {{ value }}
              </li>
            </ul>
          </column>
          <column sm="6" md="4">
            <h3 class="Footer__Infos__Title">Actualités</h3>
            <div class="Feed">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpizza.au.feu.de.bois&tabs=timeline&width=280&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=229579214062642" width="100%" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
            </div>
          </column>
          <column md="4">
            <h3 class="Footer__Infos__Title">Coordonnées</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.0485507348594!2d0.38280221536048065!3d43.12450627914299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a84c6fe9cd1b43%3A0x63be605afc6cb90b!2sPizza+au+Feu+de+Bois!5e0!3m2!1sfr!2sfr!4v1494421949351" width="100%"  height="300" frameborder="0" style="border:0" allowfullscreen>
            </iframe>
          </column>
        </row>
      </container>
    </section>
    <div class="Footer__Mentions">
      <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link> - Site créé avec
      <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt.js</a> par
      <a href="https://orion.sh" target="_blank" rel="noopener noreferrer">ORION</a>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    horaires () { return this.$store.state.horaires }
  }
}
</script>
<style lang="scss">
.Footer
{
  &__Infos
  {
    color: #ddd;
    background-color: darken(#252e38, 5%);
    &__Title
    {
      color: #fff;
      font-weight: 400;
      padding-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    &__List
    {
      margin: 0;
      padding: 0;
      list-style: none;
      &__Row
      {
        text-align: right;
        padding: 11px 5px;
        border-bottom: 1px solid lighten(#252e38, 5%);
        &:hover
        {
          background-color: #252e38;
        }
        &:last-child
        {
          border-bottom: none;
        }
        &__Title
        {
          float: left;
          text-transform: uppercase;
        }
      }
    }
  }
  &__Mentions
  {
    font-size: 15px;
    letter-spacing: 0.5px;
    text-align: center;
    padding: 15px;
    color: #ddd;
    background-color: darken(#252e38, 10%);
    a
    {
      color: #ddd;
      text-decoration: none;
      &:hover
      {
        text-decoration: underline;
      }
    }
  }
  .Feed
  {
    display: inline-block;
  }
}
</style>
