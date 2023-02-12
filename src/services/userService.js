import { storageService } from "./storage.service.js"
import {utilService} from "./util.service.js"


const logged_user='LOGGED_USER';


export const userService = {
    getUser,
    loggedInUser

}

function getUser() {
    const user={
        _id:utilService.makeId(4),
        name: 'Lola Marsh',
        balance: 100,
        transactions: []
    }
    storageService.save(logged_user,user)
    return user
}

function loggedInUser() {
    return storageService.load(logged_user)
}
