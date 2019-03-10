<template>
    <div class="[ row ]">
        <div>Recipes</div>
        <div  class="[ col-sm-8 ]" >
            
            <h1>{{recipes.title}}</h1>
            <h4>Source: ({{recipes.href}})</h4>
            
            <ListingComponent v-for="rec in recipes.results" 
                v-bind:title="rec.title" 
                v-bind:ingredients="rec.ingredients" 
                v-bind:href="rec.href"
                v-bind:thumbnail="rec.thumbnail"
                ></ListingComponent>
              
        </div>
    </div>
</template>

<script>
    import ListingComponent from './components/ListingComponent.vue'
    
    export default {
        name: 'Listing',
        components: {
            ListingComponent
        },
        data(){
            return{
                recipes: []
            }
        },
        beforeMount: function(){
            const app = this;
            if(!sessionStorage.getItem('sessionID')){
                app.$router.push({name: 'Home'});
            }
            
             const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
            const url = 'http://www.recipepuppy.com/api/';
            
            fetch(conversionUrl + url)
            .then(function(response){
              return response.json();
            })
            .then(function(result){
              app.recipes = result;
            })
        }
    }
</script>