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
                    lastMessage: [], newMessage: false, isWriting: false
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
                    lastMessage: '', newMessage: false, isWriting: false
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
                    lastMessage: '', newMessage: false, isWriting: false
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
                    lastMessage: '', newMessage: false, isWriting: false
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
                    lastMessage: '', newMessage: false, isWriting: false
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
                    lastMessage: '', newMessage: false, isWriting: false
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
                    lastMessage: '', newMessage: false, isWriting: false
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
                    lastMessage: '', newMessage: false, isWriting: false
                }
            ],
            selectedChat: null,
            userMessage: null,
            userInput: null,
            notifyOn: true,
            searchContact: '',
            lastMessagePop: '',
            popNotify: false,
            emoji: [],
            showEmoji: false,
        };
    },
    methods: {
        // funzione per aggiornare l'ultimo messaggio e la data nei contatti
        showLastMessage() {
            for (let i = 0; i < this.contacts.length; i++) {
                this.contacts[i].lastMessage = {
                    message: this.contacts[i].messages[this.contacts[i].messages.length - 1].message,
                    date: this.contacts[i].messages[this.contacts[i].messages.length - 1].date.substr(11, 5),
                    dateFull: this.contacts[i].messages[this.contacts[i].messages.length - 1].date
                }
            }
        },
        // funzione per individuare se il messaggio è ricevuto o inviato e inserire la classe corretta
        messageCondition(i, x) {
            return this.contacts[i].messages[x].status == 'received' ? 'received-message' : 'sent-message'
        },
        // funzione per tenere in memoria la chat selezionata e pulire altri dati dalle chat che di conseguenza vengono deselezionate
        selectChat(i) {
            this.selectedChat = i
            this.searchContact = ''
            this.contacts[i].newMessage = false
            this.focusChatInput();
        },
        // funzione per mostrare solo la conversazione del contatto selezionato
        show(i) {
            return this.selectedChat === i
        },
        // funzione un pò incasinata per rispondere al messaggio inviato e mandare notifiche di messaggi non letti oltre che inserire data attuale ai messaggi
        updateUserMessage() {
            if (this.userInput) {
                let now = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
                this.contacts[this.selectedChat].messages.push({ date: now, message: this.userInput, status: 'sent' })
                this.showLastMessage()
                let userInputNow = this.userInput
                this.userInput = ''
                let selectedChatNow = this.selectedChat
                setTimeout(() => {
                    this.contacts[selectedChatNow].isWriting = true
                }, 1000)
                // impostazione della risposta con la condizione ed un timeout
                setTimeout(() => {
                    now = luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss')
                    if (userInputNow.includes('ciao')) {
                        this.contacts[selectedChatNow].messages.push({ date: now, message: 'hey ciao!', status: 'received' })
                    } else if (userInputNow.includes('come stai')) {
                        this.contacts[selectedChatNow].messages.push({ date: now, message: 'io bene, te tutto a posto?', status: 'received' })
                    } else {
                        this.contacts[selectedChatNow].messages.push({ date: now, message: 'ok! è una vita che non ci vediamo', status: 'received' })
                    }
                    this.showLastMessage()
                    // altre piccoli aggiornamenti di variabili che servono per il popup di nuovo messaggio
                    this.lastMessagePop = this.contacts[selectedChatNow].name
                    this.popNotify = true
                    if (selectedChatNow != this.selectedChat) {
                        this.contacts[selectedChatNow].newMessage = true
                    }
                    this.contacts[selectedChatNow].isWriting = false
                }, 5000)
                setTimeout(() => {
                    this.popNotify = false
                }, 11000)
            }
        },
        // condizione per mostrare o non il popup dei nuovi messaggi
        notify() {
            if (this.notifyOn) {
                return true
            } else {
                return false
            }
        },
        notifyOff() {
            this.notifyOn = false
        },
        // funzione per la ricerca dei contatti
        searchFor(i) {
            let lowerName = this.contacts[i].name.toLowerCase()
            if (lowerName.includes(this.searchContact.toLowerCase())) {
                return true
            } else if (this.searchContact == '') {
                return true
            } else {
                return false
            }
        },
        // funzione per far si che cliccando sul contatto in automatico viene fatto il focus sull'input della chat
        focusChatInput() {
            if (this.$refs.chatInput) {
                this.$refs.chatInput.focus();
            }
        },
        // funzione per creare l'array di emoji da un api preso da rapidapi.com quindi con utilizzo anche della key e host
        getEmoji() {
            axios.get('https://emoji-api1.p.rapidapi.com/emojis/category/smileys-n-emotion', {
                headers: {
                    'x-rapidapi-key': 'd911d70679msh32b9cf0238fb4c5p141e2ajsnb879b43b536a',
                    'x-rapidapi-host': 'emoji-api1.p.rapidapi.com'
                }
            }).then(response => {
                this.emoji.push(response.data)
                // console.log(this.emoji[0])
            })
        },
        // click toggle per mostrare le emoji
        emojiToggle() {
            if (this.showEmoji) {
                this.showEmoji = false
            } else {
                this.showEmoji = true
            }
        },
        // funzione per aggiungere l'emoji clickata all'input
        addEmoji(emoji) {
            if (!this.userInput) {
                this.userInput = emoji
            } else {
                this.userInput += emoji
            }
        },
        // funzioncina per chiudere in automatico la lista emoji se click sull'input
        closeEmojiList() {
            this.showEmoji = false
        }
    },
    mounted() {
        this.showLastMessage()
        this.selectedChat = 0
        this.getEmoji()
    },
}).mount('#app')