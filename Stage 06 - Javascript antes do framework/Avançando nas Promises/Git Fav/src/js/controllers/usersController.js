import { getUserByUsername } from './../services/users.js'

var entries = []

export function addUser() {
    const input = document.querySelector('.search input')
    const username = input.value
    if (entries.find(entry => entry.login.toLowerCase() === username.toLowerCase())) {
        alert('Usuario ja favoritado!')
        console.log('Usuario ja favoritado!')
        return
    }
    getUserByUsername(username)
        .then(user => {
            if (user.login === undefined) {
                alert('Usuario nao encontrado!')
                console.log('Usuario nao encontrado!')
                return
            }
            entries = [...entries, user]
            updatePage()
            storeUsers()
        })
}
function createRow() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="user">
      <a target="_blank">
        <img>
        </a>
        <a target="_blank">
          <p></p>
          <span></span>
        </a>
      </td>
      <td class="repositories">
      </td>
      <td class="followers">
      </td>
      <td>
        <button class="remove">Remover</button>
      </td>
    `
    return tr
}

function removeAllTr() {
    const tbody = document.querySelector('table tbody')
    tbody.querySelectorAll('tr')
        .forEach((tr) => {
            tr.remove()
        })
}
function removeUser(user) {
    const filteredentries = entries
        .filter(entry => entry.login !== user.login)

    entries = filteredentries
    updatePage()
    storeUsers()
}
export function loadUsers() {
    entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
}
function storeUsers() {
    localStorage.setItem('@github-favorites:', JSON.stringify(entries))
}

export function updatePage() {
    emptyState()
    removeAllTr()

    entries.forEach(user => {
        const row = createRow()

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelectorAll('.user a').forEach(link => link.href = `https://github.com/${user.login}`)
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers

        row.querySelector('.remove').onclick = () => removeUser(user)
        const tbody = document.querySelector('table tbody')
        tbody.append(row)
    })
}

function emptyState() {
    if (entries.length === 0) {
        document.querySelector('.empty-state').classList.remove('hide')
    } else {
        document.querySelector('.empty-state').classList.add('hide')
    }
}