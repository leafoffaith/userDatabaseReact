import './UserForm.css';
import Card from '../Card'
import '../Card.css'
import { useState } from 'react';
import Alert from 'react-popup-alert'

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

const btnStyle = {
    backgroundColor: "palevioletred"
};

export default function UserForm(props) {

  
    let userData;

    let [enteredAge, setEnteredAge] = useState('');
    let [enteredName, setEnteredName] = useState('');

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(!enteredAge || enteredName.length == 0)
            {
                onShowAlert('error');
                return;
            }

        userData = {
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge
        }
        
        props.onReceive(userData);
        setEnteredAge('');
        setEnteredName('');

    }

    const [alert, setAlert] = useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
    })

    function onCloseAlert() {
        setAlert({
            type: '',
            text: '',
            show: false
        })
    }

    function onShowAlert(type) {
        setAlert({
            type: type,
            text: 'Please enter a valid username/Age',
            show: true
        })
    }

    return (
        <div>
            <form>
                <Card>
                    <div className="new-user__control">
                        <label>Username</label>
                        <input type="text" onChange={nameChangeHandler} value={enteredName}></input>
                    </div>
                    <div className="new-user__control">
                        <label>Age</label>
                        <input type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                    </div>
                    <div className="new-user__actions">
                        <button type="submit" className="bn3637 bn38" onClick={onSubmitHandler}><i>Add User</i></button>
                    </div>
                </Card>
            </form>
            <div>
                <Alert
                    header={'Error'}
                    btnText={'Close'}
                    text={alert.text}
                    type={alert.type}
                    show={alert.show}
                    onClosePress={onCloseAlert}
                    pressCloseOnOutsideClick={true}
                    showBorderBottom={false}
                    alertStyles={{}}
                    headerStyles={{}}
                    textStyles={{}}
                    buttonStyles={btnStyle}
                />
            </div>
        </div>

    )

};