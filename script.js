const submit = document.querySelector(`#submit`);
const password = document.querySelector(`#loginPassword`);
const email = document.querySelector(`#loginEmail`);
const div = document.querySelector(`#divv`);
const form = document.querySelector(`#S`);
const f2 = document.querySelector(`#f2`)

function upperCase(letter) {
    return letter[0] === letter[0].toUpperCase()
}

const epasts = {
    email1: `test@test.com`,
    email2: `marks@gmail.com`,
};
const parole = {
    parole1: `test123`,
    parole2: `marks123`
};

form.addEventListener(`submit`, function (e) {
    e.preventDefault()
    login(email.value, password.value)
    /*if (email.value === `` || password.value === ``) {
        alert("E-pasts vai parole nav ievadīti!");

    } else if (password.value.length <= 4) {
        alert("Parole sastāv no vismaz 5 simboliem!");
    } else if (password.value.length >= 15) {
        alert("Parole sastāv līdz 15 simboliem!");

    } else if (email.value !== epasts.email1 && password.value !== parole.parole2 || email.value !== epasts.email2 && password.value !== parole.parole1) {
        alert("E-pasts vai parole nav pareizi!");

    } else {
        hideNShow();
    }*/
});


const hideNShow = () => {
    div.style.display = "none";
    f2.insertAdjacentHTML('beforeend', form2);

    const ress = document.querySelector('#res');
    fetch('https://kontaktforma.herokuapp.com').then(res => res.json()).then(res => console.log(res))

    const btn = document.querySelector('#btn');
    const name = document.querySelector('#vards');
    const surname = document.querySelector('#uzvards');
    const email = document.querySelector('#epasts');
    const address = document.querySelector('#adress');
    const number = document.querySelector('#numurs');
    const theme = document.querySelector('#tema');
    const message = document.querySelector('#zina');

    btn.addEventListener('click', () => {

        contactform(name.value, surname.value, email.value, address.value, number.value, tema.value, zina.value)

        function contactform(name, surname, email, address, number, tema, zina) {
            if (name === ``) {
                return alert(`Vārds nav ievadīts!`);
            } else if (!upperCase(name)) {
                return alert(`Vārdam jasākas ar lielo burtu!`);

            } else if (surname === ``) {
                return alert(`Uzvārds nav ievadīts!`);
            } else if (!upperCase(surname)) {
                return alert(`Uzvārdam jasākas ar lielo burtu!`);

            } else if (email === ``) {
                return alert(`E-pasts nav ievadīts!`);

            } else if (address === ``) {
                return alert(`Adrese nav ievadīta!`);
            } else if (!upperCase(address)) {
                return alert(`Adresei jasākas ar lielo burtu!`);

            } else if (number === ``) {
                return alert(`Numurs nav ievadīts!`);
            } else if (number.length > 8 || number.length < 8) {
                return alert(`Numurs sastāv no 8 cipariem!`);

            } else if (tema === ``) {
                return alert(`Tēma nav ievadīta!`);

            } else if (zina === ``) {
                return alert(`Ziņa nav ievadīta!`);

            } else {
                fetchs();
            }
        }

        function fetchs() {

            fetch('https://kontaktforma.herokuapp.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "name": name.value, "surname": surname.value, "email": email.value, "address": address.value, "number": number.value, "theme": theme.value, "message": message.value })
            }).then(alert("Jūsu ziņa bija aizsutīta!"))
        }
    })
}

const form2 = `<div id="forma" class="container2">
<h1 id="sss2" >Kontakt forma</h1>
<div class="container3">
<div class="inputs">
<label id="txtbox1" for="vards">Vārds</label><br>
<input type="text" id="vards" name="vards"><br><br>
<label id="txtbox2" for="uzvards">Uzvārds</label><br>
<input type="text" id="uzvards" name="uzvards"><br><br>
<label id="txtbox3" for="epasts">E-pasts</label><br>
<input type="email" id="epasts" name="epasts"><br><br>
<label id="txtbox4" for="adress">Adresse</label><br>
<input type="text" id="adress" name="adress"><br><br>
<label id="txtbox5" for="numurs">Telefona numurs</label><br>
<input type="number" id="numurs" name="numurs"><br><br>
</div>
<div class="inputs2">
<label id="txtbox6" for="tema">Tēma</label><br>
<input type="text" id="tema" name="tema"><br><br>
<label id="txtbox7" for="zina">Ziņa</label><br>
<textarea style="resize:none" cols="21" rows="17" id="zina" name="zina"></textarea>
</div>
</div>
<button id="btn">Sūtīt</button>
</div>
`;

function login(email, password) {
    if (email === `` || password === ``) {
        alert("E-pasts vai parole nav ievadīti!");

    } else if (password.length <= 4) {
        alert("Parole sastāv no vismaz 5 simboliem!");
    } else if (password.length >= 15) {
        alert("Parole sastāv līdz 15 simboliem!");

    } else if (email !== epasts.email1 && password !== parole.parole2 || email !== epasts.email2 && password !== parole.parole1) {
        alert("E-pasts vai parole nav pareizi!");

    } else {
        hideNShow();
    }
}
