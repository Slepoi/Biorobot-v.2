new Vue({
  el: '#app',
  mounted() {
    for (let i = 0; i < this.shop.length; i++) {
    this.items.push({index: i, count: 0});
    }
  },
  data: {
  	gold: 50,
    img: './img/coin.png',
    checked: false,
    shop:[
      {title: "Биомеханизм", price: 7, sold: 5, img: './img/Subtract3.png'},
      {title: "Процессор", price: 5, sold: 3, img: './img/vector2.png'},
      {title: "Душа", price: 25, sold: 15, img: './img/Soul .png'}
    ],
    items: []
  },
  methods: {
  addGold: function () {
    if (100 <= this.gold) {
        alert('Нельзя больше 100');
        return;
      }
  this.gold += this.checked ? 5 : 1;
  this.coin.push(img);
  },

  buy: function (index) {
  const item = this.shop[index];
  if (item.price > this.gold) {
    alert('Время цыганить голду');
    return;
  }
  const i = this.items.findIndex(obj => obj.index === index);
  if (i >= 0) {
    this.items[i].count += 1;
  } else {
    this.items.push({
      count: 1,
      index: index
    });
  }
  this.gold -= item.price;
  },
  sold: function (index) {
    const item = this.items[index];
    if (item.count <= 0) {
      alert('Чтобы что-то продать, нужно что-то купить?');
      return;
    }
    const shopItem = this.shop[item.index];
    this.gold += shopItem.sold;
    item.count -= 1;
  },
  craft: function () {
  if (100 <= this.gold) {
      alert('Нельзя больше 100');
      return;
    }
  }
  }
})
