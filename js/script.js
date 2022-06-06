const app = new Vue({
    el : '#app',
    data : {
        listEmail : []
    },
    mounted(){
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                const risultato = result.data.response;
                this.listEmail.push(risultato);
                console.log(risultato);
            });
        }
        console.log(this.listEmail);
    }
});