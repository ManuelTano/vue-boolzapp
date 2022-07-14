// Milestone 1 
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
// e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
// visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare 
// tutti i messaggi relativi al contatto attivo all’interno del pannello della 
// conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando 
// “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà 
// un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo
// i contatti il cui nome contiene le lettere inserite 
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Vue.config.devtools = true;

const root = new Vue({
    name: 'Vue Boolzapp',
    el: '#root',
    data: {
        user: {
            name: "Manuela",
            avatar: "_io",
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Jack',
                avatar: '_4',
            },
            {
                name: "Tom",
                avatar: "_5",
              },
              {
                name: "Alessia",
                avatar: "_6",
              },
              {
                name: "Davide",
                avatar: "_7",
              },
              {
                name: "U' Boss",
                avatar: "_8",
              },
        ]
    },
    computed: {

    },
    methods: {

    }
});






