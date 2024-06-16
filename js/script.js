const fet = fetch('https://cat-fact.herokuapp.com/facts');

function loading() {
    const container = document.querySelector('.container');

    const loading = `
                <div class="load" id="loading">
                    <div class="load__img-wrap">
                        <img src="img/logo.svg" alt="" class="load__img">
                    </div>
                </div>
    `;

    container.innerHTML += loading;
}

loading();

function fetchInfo() {
    return new Promise((resolve, reject) => {
        if (fet) {
            resolve(fet);
        } else {
            reject(console.log('Произошла ошибка!'));
        }
    })
}
fetchInfo()
    .then((data) => {
        if (data.status == 200) {
            return data.json();
        } else {
            console.log('Ошибка в получении данных.')
        }
    })
    .then((info) => {
        createCard(info)
    })
    .finally(() => {
        const loading = document.getElementById('loading');
        loading.remove();
    })

function createCard(info) {
    cards = document.querySelector('.cards');

    info.forEach(el => {
        card = document.createElement('div');
        card.innerHTML = `
    <div class="card">
    <div class="card__title">${el.type}</div>
    <div class="card__text">${el.text}
    </div>
    </div>`;
        cards.append(card);
    });
}

// const player = fetch('/media/never die, дима фефилов - Умри в моих объятиях (prod. by everestdidthis, dutchrevz).mp3');

// player
//     .then(response => console.log(response))
// console.log(player.NaturalDuration);

let lang = fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days');

function getLangs() {
    return new Promise((resolve, reject) => {

    })
}