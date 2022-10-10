export const lsUserId = () => {
    const lsUser = localStorage.getItem("profile")
    let lsUserParsed 
    if (lsUser !== null) {
        lsUserParsed = JSON.parse(lsUser)
     return lsUserParsed.result._id} else {
        return false
     }
    
}