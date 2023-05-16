
const { createApp } = Vue

createApp({
    data() {
        return {
            // messageOptions: false,
            newMessage:{
                message:"",
                date: '16/05/2023 15:24',
                status: 'sent',
                MessageOptions: false,
                dropDown: 'inactive'
            },
            activeConversation : 0,
            currentUser:{
                name: "Sofia",
                avatar: "./img/avatar_io.jpg"
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            MessageOptions: false,
                            dropDown: 'inactive'
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        selezionaContatto (i){
            console.log(i)
            this.activeConversation= i
        },
        // c'è un metodo alternativo per non mandare tutto l'ogettone ma lavorare direttamente sul messaggio (10:23 circa)
        // dovrebbe essere questo
        // getMessageClass(message){
        //     let classe="sent-message"
            
        //     if(message.status == "received"){
        //         classe = "received-message"
        //     }
        //     return classe
        // }
        getMessageClass(i){
            let classe="sent-message"
            let messaggio = this.contacts[this.activeConversation].messages[i]
            if(messaggio.status == "received"){
                classe = "received-message"
            }
            return classe
        },
        getContactClass(i){
            // let classe = "" se voglio fare classe =
            if (this.activeConversation == i){
                return "activeContact"
            }
            return ""
            //ternario 
            //return (this.activeConversation == i) ? "activeContact" : ""
        },
        addMessage(){
            console.log(this.newMessage.message)
            if (this.newMessage.message!="") {
                this.inputError = false                
                let x = {...this.newMessage}
                this.contacts[this.activeConversation].messages.push(x)
                this.newMessage.message=""
                this.autoRisposta()
            }
        },
        autoRisposta(){
            setTimeout(()=>{
                this.contacts[this.activeConversation].messages.push({
                        date: '16/05/2023 15:24',
                        message: 'ok',
                        status: 'received'
                })
            }, 2*1000)
        },
        messageOptionsOn(i){
            this.contacts[this.activeConversation].messages[i].MessageOptions = true
        },
        messageOptionsOff(i){
            this.contacts[this.activeConversation].messages[i].MessageOptions = false
        },
        dropDownOn(i){
            this.contacts[this.activeConversation].messages[i].dropDown = 'active'
        },
        dropDownOff(i){
            this.contacts[this.activeConversation].messages[i].dropDown = 'inactive'
        },
        deleteMessage(i){
            this.contacts[this.activeConversation].messages.splice(i, 1)
        }
    }
}).mount('#app')