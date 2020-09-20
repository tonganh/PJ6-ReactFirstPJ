import React, { useReducer, useState } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const userData = [
        { id: 1, name: 'Tangia', email: 'tangiablalba' },
        { id: 2, name: 'Tong NgocAnh', email: 'anh.tn184040' },
        { id: 3, name: 'Vu Thi Mai Nguyet', email: 'lele' },

    ]
    const [editing, setEditing] = useState(false)
    const intialFormState = { id: '', name: '', email: '' }
    // Mang trang thai hien tai??
    const [currentUser, setCurrentUser] = useState(intialFormState)
    // Cai nay cho chuc nang edit
    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, email: user.email })
    }
    const [users, setUsers] = useState(userData)
    const addUser = (user) => {
        users.id = users.length + 1
        setUsers([...users, user])
    }
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
        // User duyet lai mang sao cho khong co phan tu id now. Tao ra mang moi. Well 1 cach de xoa phan tu.
    }
    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updateUser : user)))
    }
    return (
        <div className="container parrent">
            <h1 className="text-center">CRUD App with Hooks</h1>
            <div className="flex-row">
        
                <div className="flex-large">
                    <h2>View users</h2>
                    {/* Phan bang mac dinh */}
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                    {/* users o day chinh la mang cac phan tu hien tai.
                        deleteUser, editUSer la cac ham se can chay tuong
                        
                    */}
                </div>
            </div>
            <div className="flex-med">
                    {editing ? (
                        //Return true ->  cho phep edit 
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
                        </div>
                    ) : (
                            <div>
                                <h2>
                                    Add user
                            </h2>
                                <AddUserForm addUser={addUser} />
                            </div>
                        )
                    }
                </div>
        </div >
    )
}

export default App