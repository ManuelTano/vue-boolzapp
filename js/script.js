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
            name: "Manuel",
            avatar: "_2",
        },
        currentIndex: 0,
        newMessage: '',
        searchContacts: '',
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '15/07/2022 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '16/07/2022 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '16/07/2022 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '16/07/2022 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '15/07/2022 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '15/07/2022 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Jack',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '15/07/2022 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Davide',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '15/07/2022 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Alessia',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '16/07/2022 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '16/07/2022 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '16/07/2022 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Alex',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '16/07/2022 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '16/07/2022 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '16/07/2022 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'U Boss',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '16/07/2022 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '16/07/2022 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Alberto',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '15/07/2022 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '15/07/2022 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Thomas',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '15/07/2022 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Paolo',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '15/07/2022 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '15/07/2022 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Desirè',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '16/07/2022 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '16/07/2022 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '16/07/2022 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
        ]
    },
    computed: {

    },
    methods: {
        setCurrentContact(index) {
            this.currentIndex = index;
        },
        sendReceiveMessage() {

            const myMessage = {
                date: "17/07/2022 17:30:55",
                text: this.newMessage,
                status: "sent",
            };
            const yoursMessage = {
                date: "17/07/2022 17:30:55",
                text: 'Okay!',
                status: "received",
            }

            this.contacts[this.currentIndex].messages.push(myMessage);
            this.newMessage = '';

            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push(yoursMessage)
            }, 2000);
        },
        removeMessage (index) {
            this.contacts[this.currentIndex].messages.splice(index, 1);
        }
        
        },
    }
);






