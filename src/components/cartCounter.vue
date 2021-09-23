<template>
    <div >
       Корзина: {{count}} шт.
    </div>
</template>

<script>
    export default {
        data(){
            return{
                count: 0,
            }
        },
        methods:{
            checkItems(){
                var items = window.localStorage.getItem('cart');
                if(items){
                    
                }
                
            }
        },
        mounted(){
            setInterval(() =>{
                this.checkItems();
            }, 3000)
        }
    }
</script>

<style lang="scss" scoped>

</style>