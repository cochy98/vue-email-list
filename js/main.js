const app = new Vue(
    {
        el: '#app',
        data: {
            randomEmail: []
        },
        methods: {
            generateRandomEmail(){
                // Resetto l'array delle email random ad ogni click sul pulsante
                this.randomEmail = [];

                // Genero 10 email casuali e le inserisco nell'array
                for(let i = 0; i < 10; i ++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response) => {
                        const result = response.data;
                        console.log(result.response);
                        this.randomEmail.push(result.response);
                    });
                }
            }
        }
    }
);