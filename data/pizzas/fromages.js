module.exports = [
  {
    name: 'Fromagère',
    description: 'Tomate ou crème fraîche, 3 fromages, mozzarella',
    prices: {
      petite: 5.5,
      moyenne: 10,
      grande: 12.2
    }
  },
  {
    name: 'Savoyarde',
    description: 'Crème fraîche, pommes de terre, raclette, reblochon, lardons, mozzarella',
    prices: {
      petite: 6,
      moyenne: 10.5,
      grande: 13
    }
  },
  {
    name: 'Chèvre',
    description: 'Tomate ou crème fraîche, mozzarella',
    prices: {
      petite: 5.5,
      moyenne: 8.8,
      grande: 10.8
    },
    option: {
      name: 'Miel',
      prices: {
        petite: 0.5,
        moyenne: 0.5,
        grande: 0.5
      }
    }
  }
]
