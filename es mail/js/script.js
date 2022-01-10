console.log (' JS OK ');

const userMail = prompt ('Inserisci la tua mail');
console.log (userMail);

const email = ['davidecroce10@gmail.com', 'littleruruki45@gmail.com', 'kurokinokenshi@gmail.com'];
console.table (email);

let message;

for (let i = 0; i < email.length; i++){
    if (userMail === email[i]){
        message = ('Sei nella lista');
        
    }
}

if (message === undefined){
    message = ('Non sei nella lista');
}

console.log (message);