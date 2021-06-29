Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        
        data: { 
            toDoList: [ // Array contenente le tasks
                'Comprare il pane',
                'Buttare immondizia',
                'Portare il cane a spasso',
                'Pagare le bollette',
            ],
            newTask: '', // inizializzo per l'input la stringa vuota
        },
        // * Per il focus automatico su input in html
        mounted() {

        },
        methods: {
    
        }    
    }
);