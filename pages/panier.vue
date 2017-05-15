<template>
  <section>
    <container>
      <h1 class="Title">Panier de pre-commande</h1>
      <h2 class="SubTitle">Merci de finaliser votre commande au 05.62.98.16.16</h2>
      <table class="Ticket" v-if="basket.length">
        <thead>
          <tr>
            <th>Quantité</th>
            <th>Produit</th>
            <th>Dimension</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in basket">
            <td>
              <button type="button" @click="minus(i)" class="Button">-</button>
              {{ product.quantity }}
              <button type="button" @click="plus(i)" class="Button">+</button>
            </td>
            <td class="Ticket__Description">
              <p>
                {{ product.name }}
                <span v-if="product.option">
                   - Supplément: {{ product.option.name }} (+ {{ product.option.price }}€)
                 </span>
              </p>
              <i>{{ product.description }}</i>
            </td>
            <td>
              {{ getSize(product.size) }}
            </td>
            <td>
              {{ getPrice(product).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }) }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2">
              <button type="button" @click="deleteBasket()" class="Button">Supprimer le panier</button>
            </td>
            <td>TOTAL</td>
            <td>{{ total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }) }}</td>
          </tr>
        </tfoot>
      </table>
      <p class="NoTicket" v-else>
        PANIER VIDE - Aucun produit n'a été trouvé.
      </p>
    </container>
  </section>
</template>

<script>
export default {
  computed: {
    total () {
      return this.$store.getters.getTotal
    },
    basket () {
      return this.$store.state.commande
    }
  },
  methods: {
    getSize (key) {
      return this.$store.getters.getSize(key)
    },
    getPrice (product) {
      return (product.price + (product.option ? product.option.price : 0)) * product.quantity
    },
    plus (i) {
      this.$store.dispatch('addQuantity', i)
    },
    minus (i) {
      this.$store.dispatch('deleteQuantity', i)
    },
    deleteBasket () {
      this.$store.dispatch('deleteCommand')
    }
  },
  head () {
    return {
      title: 'Panier de pre-commande - Pizza Au Feu De Bois - LANNEMEZAN',
      meta: [
        { hid: 'description', name: 'description', content: 'Sélectionnez vos pizzas, plaques et desserts puis commandez par téléphone à la pizzeria PIZZA AU FEU DE BOIS à LANNEMEZAN. Pizzas à emporter, à partir de 4.00€.' }
      ]
    }
  }
}
</script>

<style lang="scss">
.Ticket
{
  width: 100%;
  margin-top: 30px;
  border-collapse: collapse;
  background-color: #fff;
  thead
  {
    tr
    {
      background-color: lighten(#252e38, 75%);
      th
      {
        padding: 15px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    }
  }
  tbody
  {
    tr:nth-child(odd)
    {
      background-color: lighten(#252e38, 80%);
    }
    td
    {
      font-size: 16px;
      color: #252e38;
      text-align: center;
      padding: 15px;
      i
      {
        font-size: 14px;
        color: lighten(#252e38, 10%);
      }
      .Button
      {
        width: 25px;
        height: 25px;
        display: inline-block;
        background-color: #fff;
        border-radius: 100%;
        cursor: pointer;
        border: 1px solid lighten(#252e38, 70%);
      }
    }
  }
  tfoot
  {
    tr
    {
      td
      {
        padding: 15px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-align: center;
        background-color: lighten(#252e38, 75%);
        &:first-child
        {
          text-align: left;
          background-color: #fff;
        }
        .Button
        {
          cursor: pointer;
          color: #fff;
          background-color: #bf752b;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 14px;
          &:hover
          {
            background-color: darken(#bf752b, 5%)
          }
        }
      }
    }
  }
}
.NoTicket
{
  border-radius: 5px;
  padding: 30px;
  margin-top: 30px;
  text-align: center;
  background-color: lighten(#252e38, 75%);
}
</style>
