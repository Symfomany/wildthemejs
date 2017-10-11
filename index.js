var profil = { prenom: 'Julien' };

var app = new Vue({
    el: '#app',
    data: { // conteneur de données => l'état
        message: 'Hello Vue!',
        profil: profil,
        val: '',
        coche: false,
        valTwo: '',
        input: false,
        slider: 20,
        text: 'text',
        search: '',
        articles: ['Tchikita', 'en Y', 'Wesh Alors']
    },
    methods: {
        cocher() {
            this.message = 'Je suis coché'
            this.articles.reverse();
        },
        controler() {
            if (this.val.length > 10) {
                this.coche = false
                this.message = 'Pas trop long'
            } else {
                this.coche = true
                this.message = 'Pas assez long'
            }
        }
    },
    watch: {
        slider: function (val) {
            if (val > 30) {
                this.input = true
            } else {
                this.input = false;
            }
        },
        valTwo: function (val) {
            if (val == 'JUL') {
                this.message = ''
                this.coche = true
            }
        },

        articlesFiltres: function () {
            if (this.articlesFiltres.length == 1) {
                this.message = "C'est forcement JUL!"
                this.text = 'checkbox'
            }
        }

    },

    computed: {
        articlesFiltres() {
            if (this.search == "") {
                return this.articles;
            } else {
                const regex = new RegExp(this.search, 'i');
                return this.articles.filter((eltCourant) => regex.test(eltCourant))
            }
        }
    }

});


console.log(profil.prenom === app.profil.prenom)
profil.prenom = 'Alban';
console.log(app.profil.prenom);

app.profil.prenom = 'jeremy';

console.log(profil.prenom);
