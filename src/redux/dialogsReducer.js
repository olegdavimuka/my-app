const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: "Dialog 1" },
        { id: 2, name: "Dialog 2" },
        { id: 3, name: "Dialog 3" },
        { id: 4, name: "Dialog 4" },
        { id: 5, name: "Dialog 5" },
        { id: 6, name: "Dialog 6" },
        { id: 7, name: "Dialog 7" },
        { id: 8, name: "Dialog 8" }
    ],
    messages: [
        { id: 1, message: "Message 1" },
        { id: 2, message: "Message 2" },
        { id: 3, message: "Message 3" },
        { id: 4, message: "Message 4" }
    ],
    newMessageBody: ""
}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: state.messages.length + 1, message: body })
            return state
        default:
            return state
    }

}

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export default dialogsReducer