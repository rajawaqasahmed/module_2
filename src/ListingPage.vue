<template>
    <div class="[ row ]">
        <div>Recipes</div>
        <div  class="[ col-sm-8 ]" >
            <ListingComponent 
                v-bind:title="recipes.title" 
                v-bind:version="recipes.version" 
                v-bind:href="recipes.href"></ListingComponent>
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