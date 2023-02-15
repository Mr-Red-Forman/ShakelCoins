import { storageService } from "./storage.service.js"
import { utilService } from "./util.service.js"

const logged_user = 'LOGGED_USER';
const allUsers = 'ALL_USERS';



export const userService = {
    getUser,
    loggedInUser,
    logoutUser,
    checkIfUserReg,
    addTransaction
}

function getUser() {
    const user = {
        _id: utilService.makeId(4),
        name: 'Lola Marsh',
        balance: 100,
        transactions: []
    }
    storageService.save(logged_user, user)
    return user
}

function checkIfUserReg(user) {
    let newLoggedInUser = []
    const users = _getUsers() ? _getUsers() : [(getUser())]
    const idx = users.findIndex(u => u.name === user.name)
    if (idx > -1) {
        newLoggedInUser = users[idx]
        newLoggedInUser.firstTime = false
    } else {
        newLoggedInUser = { name: user.name, balance: 100, transactions: [] }
        users.push(newLoggedInUser)
        newLoggedInUser.firstTime = true
    }
    storageService.save(logged_user, newLoggedInUser)
    storageService.save(allUsers, users)
    return newLoggedInUser
}

async function addTransaction({ action, contact, amount }) {
    return new Promise((resolve, reject) => {
    // const contacts = await contactService.getContacts()
    const user = loggedInUser()
    const users = _getUsers()
    const userIdx = users.findIndex(u => u.name === user.name)
    // const contactsIdx = contacts.findIndex(u => u.name === contact.name)
    users[userIdx].transactions.push(
        {
            [action]: utilService.makeId(5),
			to:contact.name,
            at: new Date(),
            amount
        }
    )
    const preAmount= users[userIdx].amount
    if (action==='Ask'){
        users[userIdx].balance+= amount
    }else{
        users[userIdx].balance-= amount 
    }
    console.log('users[userIdx].amount:', users[userIdx].amount)
    if (users[userIdx].amount<0) {reject(new Error('Sorry you dont have enough in the account'))}
    storageService.save(allUsers, users)
    storageService.save(logged_user, users[userIdx])
    resolve(users[userIdx].balance)
    })
}

function loggedInUser() {
    return storageService.load(logged_user)
}

function logoutUser() {
    storageService.save(logged_user, null)
    return null
}

function _getUsers() {
    return storageService.load(allUsers)
}
