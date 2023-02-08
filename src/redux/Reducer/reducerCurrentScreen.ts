import {initCurrentScreen} from "../data/data"
import * as f from '../action'

const reducerCurrentScreen = (state = initCurrentScreen, { type, payload }: any) => {
    switch (type) {
        case f.SEND_CURRENT_SCREEN:
            return {
                ...state,
                currentScreen: payload.currentScreen
            }
        default:
            return state;
    }
}

export default reducerCurrentScreen;