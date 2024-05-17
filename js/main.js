const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'https://i.pravatar.cc/150?img=67',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                    lastMessage: ''
                },
                {
                    name: 'Fabio',
                    avatar: 'https://i.pravatar.cc/150?img=52',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                    lastMessage: ''
                },
                {
                    name: 'Samuele',
                    avatar: 'https://i.pravatar.cc/150?img=58',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                    lastMessage: ''
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'https://i.pravatar.cc/150?img=6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                    lastMessage: ''
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'https://i.pravatar.cc/150?img=15',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                    lastMessage: ''
                },
                {
                    name: 'Claudia',
                    avatar: 'https://i.pravatar.cc/150?img=26',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                    lastMessage: ''
                },
                {
                    name: 'Federico',
                    avatar: 'https://i.pravatar.cc/150?img=33',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                    lastMessage: ''
                },
                {
                    name: 'Alessia',
                    avatar: 'https://i.pravatar.cc/150?img=36',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                    lastMessage: ''
                }
            ],
            selectedChat: null,

        };
    },
    methods: {
        showLastMessage() {
            for (let i = 0; i < this.contacts.length; i++) {
                this.contacts[i].lastMessage = this.contacts[i].messages[this.contacts[i].messages.length - 1].message
            }
        },
        messageCondition(i, x) {
            return this.contacts[i].messages[x].status == 'received' ? 'received-message' : 'sent-message'
        },
        selectChat(i) {
            this.selectedChat = i
            console.log(this.selectedChat)
        },
        show(i) {
            return this.selectedChat === i
        }
    },
    mounted() {
        let timer = setInterval(this.showLastMessage, 1000)
        this.selectedChat = 0
    },
}).mount('#app')