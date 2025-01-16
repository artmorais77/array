const users = ["Ana", "Bruno", "Carlos"]

const idUsers =  users.map ((user, index) => ({
    user,  id: index + 1
}))

console.log(idUsers)