import { storageService } from "./storage.service.js"
import {utilService} from "./util.service.js"


const logged_user='LOGGED_USER';
const allUsers='ALL_USERS';



export const userService = {
    getUser,
    loggedInUser,
    logoutUser,
    checkIfUserReg
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

function _getUsers(){
    return storageService.load(allUsers)
}

function checkIfUserReg(user){
    let newLoggedInUser=[]
    const users=_getUsers()? _getUsers() : [(getUser())]
    const idx=users.findIndex(u=>u.name===user.name)
    if (idx>-1){
        newLoggedInUser=users[idx]
        newLoggedInUser.firstTime = false
    }else{
        newLoggedInUser={ name:user.name,balance: 100,transactions: []}
        users.push(newLoggedInUser)
        newLoggedInUser.firstTime = true
    }
    storageService.save(logged_user,newLoggedInUser)
    storageService.save(allUsers, users)
    return newLoggedInUser
    
}

function loggedInUser() {
    return storageService.load(logged_user)
}

function logoutUser() {
    storageService.save(logged_user,null)
    return null
}
