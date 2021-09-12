new Vue({
    el: '#app',
    mounted() {
        for (let i = 0; i < this.shop.length; i++) {
            this.items.push({
                index: i,
                count: 0
            });
        }
    },
    data: {
        checked: false,
        isHasMoneyAndAllDetails: true,
        gold: 99,
        img: './img/coin.png',
        shop: [{
                title: "Биомеханизм",
                price: 7,
                sold: 5,
                img: './img/Subtract3.png'
            },
            {
                title: "Процессор",
                price: 5,
                sold: 3,
                img: './img/vector2.png'
            },
            {
                title: "Душа",
                price: 25,
                sold: 15,
                img: './img/Soul .png'
            }
        ],
        item2: 4,
        item3: 1,
        items: [],
        pickedType: 'FrontEnd',
        pickedgender: 'Male'
    },
    computed: {
        Robot () {
            if ((this.pickedType == 'FrontEnd') && (this.pickedgender == 'Female')) {
                return './img/nofrontFeMale.png'
            } else if ((this.pickedType == 'FrontEnd') && (this.pickedgender == 'Male')) {
                return './img/nofrontmale.png'
            } else if ((this.pickedType == 'Design') && (this.pickedgender == 'Female')) {
                return './img/noDesignerFeMale.png'
            } else {
                return './img/noDesignerMale.png'
            }
        },
        item1 (){
            return 1
        }
    },
    methods: {
        addGold: function() {
            if (100 <= this.gold) {
                openModal.style.display = 'block';
                return;
            }
            this.gold += this.checked ? 5 : 1;
        },
        buy: function(index) {
            const item = this.shop[index];
            if (item.price > this.gold) {
                NotModal.style.display = 'block';
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
        sold: function(index) {
            const item = this.items[index];
            if (item.count <= 0) {
                return;
            }
            const shopItem = this.shop[item.index];
            this.gold += shopItem.sold;
            item.count -= 1;
        }
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function() {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function() {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });
});

document.getElementById('close').onclick = function() {
    document.getElementById('openModal').style.display = "none"
}
document.getElementById('closer').onclick = function() {
    document.getElementById('NotModal').style.display = "none"
}