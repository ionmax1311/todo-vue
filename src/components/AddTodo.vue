<template>
    <form v-on:submit.prevent="onSubmit">
       <input type="text" v-model="title"> 
       <button type="submit">Create</button>
    </form>
</template>

<script>

export default{
    data(){
        return{
            title: ''
        }
       
    },
    methods:{
        onSubmit(){
            if(this.title.trim()){
                const newTodo= {
                    id:Date.now(),
                    title:this.title,
                    compleated:false
                }

               this.$emit('add-todo',newTodo)
               console.log(this.title);
               this.title = ""
            }
        }
    }
}
</script>


<style scoped>
form {
    display: flex;
    justify-content: center;
}
input {
    width: 400px;
}
</style>