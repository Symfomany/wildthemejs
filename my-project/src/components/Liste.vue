<template>
  <div class="liste">
   <h3>Liste</h3>
   <div v-if="users.length == 0">
    <img src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif">
   </div>
   <ul v-else>
      <li v-for="user in users"> 
        {{ user.name }} - {{ user.poste }}
        <p v-if="user.sexe == true">Femme</p>
        <p v-else>Homme</p>
      </li>
   </ul>
    <hr />
    <br /> <br /> <br />

    <form @submit.prevent="enregistrer()">
      <div>Homme <input :value="false" v-model="newUser.sexe" type="radio" name="sexe" />
      Femme <input :value="true" v-model="newUser.sexe"  type="radio" name="sexe" /></div>

      <div><input v-model="newUser.name"  type="text" placeholder="Son name"  /></div>
      <div><input v-model="newUser.poste"  type="text" placeholder="Son poste"  /></div>
      <div><input v-model="newUser.age"  type="text" placeholder="Son age"  /></div>
      <button type="submit">Enregistrer</button>
    </form>



  </div>
</template>
<script>
import User from '@/components/User';
import axios from 'axios';

export default {
  name: 'liste',
  components: {user: User},
  data(){
    return {
      users: [],
      newUser: {
        sexe: null,
        name: '',
        age: 18,
        poste: '',
      }
    }
  },
  methods:{
    enregistrer(){
      axios.post('http://localhost:3000/datas', this.newUser).then((resultat) =>{
         this.users.push(this.newUser)
         this.newUser = {};
      })
    }
  },
  created(){
      // AJAX pour récupérer des données
      axios.get('http://localhost:3000/datas').then((resultat) => {
        this.users = resultat.data
      });
      
  },
  mounted(){

  },
  updated(){

  },
  destroyed(){

  },
 
}
</script>
