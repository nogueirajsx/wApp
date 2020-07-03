import { MODIFICA_ADICIONA_CONTATOS_EMAIL } from "../actions/types";

const INITIAL_STATE = {
    adiciona_contatos_email: 'teste@teste.com'
}

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATOS_EMAIL:
        return { ...state, adiciona_contatos_email: action.payload }
        default:
            return state;
    }
}