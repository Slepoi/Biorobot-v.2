new Vue({
  el: '#app',

  data: {
  	gold: 100,
    checked: false,
    shop:[
      {title: "Биомеханизм", price: 7, sold: 5},
      {title: "Процессор", price: 5, sold: 3},
      {title: "Душа", price: 25, sold: 15}
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
          if (4 < this.items[i].count) {
        alert('Тебе всего 4 нужно детали');
        return;
      }
  },
  sold: function (index) {
    const item = this.items[index];
    if (item.count <= 0) {
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
