Vue.config.devtools = true;

new Vue(
    {
        el: '#app', // id "app" in html
        
        // le mie variabili
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

        // le mie funzioni
        methods: {

            // funzione per l'autofocus 
            autofocus: function() {
                const element = document.getElementById('newTaskItem'); // seleziono l'elemento in html
                element.focus(); // gli assegno il focus
            },

            // funzione per aggiungere una task all'elenco (array toDoList)
            addTask: function() {
                if (this.newTask === '') {
                    alert('Per aggiungere un elemento alla lista, devi prima scriverlo');
                    this.autofocus(); // assegno il focus all'input
                } else {
                    this.toDoList.push(this.newTask); // prendo il valore scritto e lo pusho nell'array
                    this.newTask = ''; // lo inizializzo nuovamente per permettere di scrivere il nuovo task
                    this.autofocus(); // assegno il focus all'input
                }
            },

            // funzione per eliminare una task dall'elenco (array toDoList)
            deleteTask: function(index) {
                this.toDoList.splice(index, 1); // taglio un elemento a partire dall'index dell'elemento selezionato
                                                // in pratica elimino solo ed esclusivamente quello selezionato
                this.autofocus(); // assegno il focus all'input
            },

            // funzione per azzerare ("pulire") la lista (eliminare ogni elemento dell'array)
            deleteList: function() {
                this.toDoList = []; // inizializzo l'array "svuotandolo"
                this.autofocus(); // assegno il focus all'input
            }
        }    
    }
);