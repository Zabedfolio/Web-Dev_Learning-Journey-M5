const firstName = 'Kamruzzaman';
const lastName = 'Shuvo';

const aboutMe = `My name is ${firstName} ${lastName}`;
console.log(aboutMe)

function getCardHTML(name){
    const div =`
    <div class="card">
        <h2>${name}</h2>
    </div>
    `

    console.log(div);
}

getCardHTML('Samsung')