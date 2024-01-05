import * as usersController from './controllers/usersController.js'

usersController.loadUsers()
usersController.updatePage()

const addButton = document.querySelector('.search button')

// addButton.addEventListener('click', usersController.addUser)
addButton.addEventListener('click', () => {
    addButton.disabled = true
    usersController.addUser()
    setTimeout(() => { addButton.disabled = false }, 1000)
}
)