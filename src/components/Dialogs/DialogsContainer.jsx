import React from "react"
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer"
import StoreContext from "../../StoreContext"
import Dialogs from "./Dialogs"

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyActionCreator(body))
            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state} />
        }
        }
    </StoreContext.Consumer>

}

export default DialogsContainer