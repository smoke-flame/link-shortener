const API_URL = 'http://localhost:5000/'

const form = document.querySelector('form')
const linkField = document.getElementById('short-link')

form.addEventListener('submit',async (e) => {
    e.preventDefault()
    const link = document.getElementById('link')
    if(!link.value.trim()) {
        alert('Вы не ввели ссылку!')
        return
    }

    const body = {
        link: link.value
    }

    link.value = ''
    linkField.value = ''


    const response = await fetch(`${API_URL}link` , {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if(data.status) {
        linkField.insertAdjacentHTML('afterbegin', `<a href="${API_URL + data.payload.link}">${API_URL + data.payload.link}</a>`)
    } else {
        alert('Не корректная ссылка')
    }
})