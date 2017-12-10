<template>
  <div class="Product">
    <h3 class="Product__Title">{{ product.name }}</h3>
    <i class="Product__Description" v-if="product.description">{{ product.description }}</i>
    <p class="Product__Option" v-if="product.option">
      <input type="checkbox" v-model="option">
      Supplément: {{ product.option.name }}
    </p>
    <ul class="Product__List">
      <li v-for="(price, size) in product.prices" class="Product__List__Item" :key="size">
        <div class="Product__List__Item__Size">
          {{ getSize(size) }}
        </div>
        <div class="Product__List__Item__Price">
          {{ getPrice(price, size).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }) }}
        </div>
        <div class="Product__List__Item__Button" @click="add(product, size, price)">
          <basket/>
          <span class="Product__List__Item__Button--plus">+</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Basket from '@/components/Icons/Store'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return { option: true }
  },
  methods: {
    getSize (key) {
      return this.$store.getters.getSize(key)
    },
    getPrice (price, key) {
      return price + (this.product.option && this.option ? this.product.option.prices[key] : 0)
    },
    add (product, taille, prix) {
      let obj = {
        name: product.name,
        description: product.description,
        size: taille,
        price: prix,
        option: null,
        quantity: 1
      }
      if (this.product.option && this.option) {
        obj.option = {
          name: this.product.option.name,
          price: this.product.option.prices[taille]
        }
      }
      this.$store.dispatch('addProduct', obj)
    }
  },
  components: {
    Basket
  }
}
</script>

<style lang="scss">
.Product
{
  text-align: center;
  &__Title
  {
    color: #252e38;
    padding: 15px;
    padding-bottom: 10px;
    font-weight: 400;
    font-size: 24px;
  }
  &__Description
  {
    display: block;
    color: lighten(#252e38, 10%);
    padding: 0 15px;
    padding-bottom: 10px;
  }
  &__Option
  {
    padding: 10px 15px;
    padding-bottom: 0;
  }
  &__List
  {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 10px 0;
    &__Item
    {
      overflow: auto;
      display: block;
      border-radius: 5px;
      margin: 15px 15px;
      margin-top: 5px;
      &__Size
      {
        float: left;
        color: #252e38;
        height: 32px;
        line-height: 30px;
        padding: 0 15px;
        display: inline-block;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: lighten(#252e38, 80%);
        border: 1px solid lighten(#252e38, 70%);
      }
      &__Price
      {
        float: left;
        color: #252e38;
        height: 32px;
        line-height: 30px;
        padding: 0 15px;
        display: inline-block;
        border-top: 1px solid lighten(#252e38, 70%);
        border-bottom: 1px solid lighten(#252e38, 70%);
      }
      &__Button
      {
        float: left;
        cursor: pointer;
        height: 32px;
        width: 50px;
        line-height: 30px;
        padding: 0 15px;
        display: inline-block;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: lighten(#252e38, 70%);
        &:hover
        {
          background-color: #41b883;
          .Icons
          {
            display: none;
          }
          .Product__List__Item__Button--plus
          {
            display: block;
          }
        }
        &--plus
        {
          display: none;
          color: #fff;
          font-size: 20px;
          font-weight: 600;
        }
        .Icons
        {
          height: 16px;
          margin-top: 7px;
        }
      }
    }
  }
}
</style>
