function UserList(){
    const users = [
        {id: 1, name: "Sravan NK", role: "Frontend Developer"},
        {id: 2, name: "Laika", role: "mentor"},
        {id: 3, name: "React", role: "Library"},
        {id: 4, name: "javascript", role: "Language"}
    ]
    return(
        <div>
            <h3>Users List</h3>

            { users.map((user) => (
                <div key={ user.id }>
                    <h4>{ user.name }</h4>
                    <p>{ user.role }</p>
                </div>
            )) }
        </div>
    )
}
export default UserList