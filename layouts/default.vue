<template>
  <div>
    <topbar/>
    <div class="Romane">
      <pl-header/>
      <navbar/>
    </div>
    <nuxt/>
    <foot/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import PlHeader from '@/components/Header'
import Foot from '@/components/Footer'

export default {
  mounted () {
    if (localStorage.getItem('pizzaLannemezan')) {
      this.$store.dispatch('initCommand', JSON.parse(localStorage.getItem('pizzaLannemezan')))
    } else {
      localStorage.setItem('pizzaLannemezan', JSON.stringify(this.$store.state.commande))
    }
  },
  components: {
    Topbar,
    Navbar,
    PlHeader,
    Foot
  }
}
</script>

<style src="vue-flexboxgrid/dist/vue-flexboxgrid.css"/>
<style lang="scss">
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
section
{
  padding: 50px 0;
}
.container
{
  padding: 0 20px;
}
.Title
{
  color: #252e38;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding-bottom: 45px;
}
.SubTitle
{
  color: lighten(#252e38, 10%);
  font-size: 30px;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding-bottom: 30px;
}
.Paragraph
{
  text-align: center;
  line-height: 26px;
  color: lighten(#252e38, 20%);
  margin-bottom: 30px;
  a
  {
    color: #252e38;
    text-decoration: none;
    &:hover
    {
      text-decoration: underline;
    }
  }
}
.Link
{
  display: block;
  border-radius: 5px;
  color: #252e38;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  height: 46px;
  line-height: 44px;
  letter-spacing: 0.5px;
  border: 1px solid lighten(#252e38, 70%);
  &__Box
  {
    display: inline-block;
    .Icons
    {
      float: left;
      height: 28px;
      margin-top: 7px;
      margin-right: 10px;
    }
  }
  &:hover
  {
    background-color: lighten(#252e38, 80%);
  }
}
.Card
{
  height: 100%;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid lighten(#252e38, 70%);
  &__Image
  {
    width: 100%;
    display: inline-block;
  }
}
.Romane
{
  background-color: #252e38;
  background-image: url('~static/images/bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
