import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Post 1", likesCount: 5 },
                { id: 2, message: "Post 2", likesCount: 10 },
                { id: 3, message: "Post 3", likesCount: 15 },
                { id: 4, message: "Post 4", likesCount: 20 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}

    },

    _callSubscriber() {
        console.log('Stage changed.')
    },


    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;