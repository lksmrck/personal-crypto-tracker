//Function for getting userId/googleId from localStorage (based on type of login).
export const lsUserId = () => {
    const lsUser = localStorage.getItem("profile")
    let lsUserParsed 
    if (lsUser !== null) {
        lsUserParsed = JSON.parse(lsUser)
        if(lsUserParsed.result._id) {return lsUserParsed.result._id} else {return lsUserParsed.result.googleId}
     } else {
        return false
     }
    
}