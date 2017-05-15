<template>
  <section>
    <container>
      <h2 class="Title">Mentions légales</h2>
      <h3 class="SubTitle">La société</h3>
      <p class="Paragraph">
        SARL Barousse Tradition <br>
        95 rue alsace lorraine <br>
        65300 Lannemezan, FRANCE <br>
        05 62 98 16 16
      </p>
      <h3 class="SubTitle">Réalisation</h3>
      <p class="Paragraph">
        Site créé avec le framework Open Source <a href="https://nuxtjs.org" target="_blank" rel="noopener noreferrer">Nuxt.js</a> par <a href="https://orion.sh" target="_blank" rel="noopener noreferrer">ORION</a>.
      </p>
      <h3 class="SubTitle">Propriété intellectuelle</h3>
      <p class="Paragraph">
        Le site internet ainsi que l’ensemble des droits afférents est la propriété exclusive et en sa totalité de la SARL Barousse Tradition. Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet est interdite et constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la propriété intellectuelle.
      </p>
    </container>
  </section>
</template>

<script>
export default {
  computed: {
    basket () {
      return this.$store.state.commande
    }
  },
  head () {
    return {
      title: 'Mentions légales - Pizza Au Feu De Bois - LANNEMEZAN',
      meta: [
        { hid: 'description', name: 'description', content: 'Mentions légales de la pizzeria PIZZA AU FEU DE BOIS à LANNEMEZAN. Pizzas à emporter, à partir de 4.00€.' }
      ]
    }
  }
}
</script>
