import {initLanguage} from "../data/data"
import * as f from '../action'

const reducerLanguage = (state = initLanguage, { type, payload }: any) => {
    switch (type) {
        case f.CHANGE_LANGUAGE:
            return {
                ...state,
                language: payload.language
            }
        default:
            return state;
    }
}

export default reducerLanguage;