<template>
    <div class="[ card ]">
        <div class="[ row ]">
            <div class="[ col-sm-4 ]"></div>
            <div class="[ col-sm-4 ]"></div>     
        </div>
        
        <div class="[ card--information ]"><br />
                    
            <b>Title:</b> {{title}}<br />
            <b>Version:</b> {{version}}<br />
            <b>Href:</b> {{href}}<br />
                    
        </div> 
    </div> 
            
</template>

<script>
export default {
    name: 'ListingComponent',
    props: ['version','title','href','ingredients'],
}
</script>

<style scoped>
    .card{
        border: solid 1px black;
        border-radius: 4px;
        padding: 0px 20px 30px;
        margin-top: 30px;
    }
    
    .card img{
        width:100%;
        padding-top: 20px;
    }
    .card span{
        font-weight: bold;
    }
</style>