// import { user } from "pg/lib/defaults.js";

function Users(Users) {
    return (
    <div>
        <h1>User components</h1>
        <h2>Name: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h3>Email: {user.email}</h3>
    </div>
    )
}

export default Users;