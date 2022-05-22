import React from "react"
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog =>
        <Dialog id={dialog.id} name={dialog.name} />
    )

    let messageElements = state.messages.map(message =>
        <Message message={message.message} />
    )

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesItems}>
                {messageElements}
            </div>
            <div className={classes.newMessage}>
                <textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Enter your message' ></textarea>
            </div>
            <div className={classes.addMessage}>
                <button onClick={onSendMessageClick}>Add Message</button>
            </div>
        </div>

    )
}

export default Dialogs