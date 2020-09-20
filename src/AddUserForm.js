import React, { useState } from 'react'
import { Button, InputGroup, Modal,FormControl } from 'react-bootstrap'
import InputGroupWithExtras from 'react-bootstrap/esm/InputGroup';
const AddUserForm = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const intialFormState={id:null,name:'',email:''}
    const [user,setUser]=useState(intialFormState)
    const handleInputChange=(event)=>
    {
        const {name,value}=event.target
        console.log(event.target)
        setUser({...user,[name]:value})
    }
    const onSubmit= (event)=>{
        event.preventDefault()
        if(!user.name || !user.email) return
        props.addUser(user)
        setUser(intialFormState)        
        setShow(false)
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add
        </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="text" name="email" value={user.email} onChange={handleInputChange}></input>

                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Add
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddUserForm