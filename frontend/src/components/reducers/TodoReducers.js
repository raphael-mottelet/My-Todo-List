import {
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL,

    TODO_DETAILS_REQUEST,
    TODO_DETAILS_SUCCESS,
    TODO_DETAILS_FAIL,

    TODO_CREATE_REVIEW_REQUEST,
    TODO_CREATE_REVIEW_SUCCESS,
    TODO_CREATE_REVIEW_FAIL,
    TODO_CREATE_REVIEW_RESET,

    
} from '../Constants/TodoConstants'

export const TodoListReducer = (state = {TODOs:[] }, action) => {
    switch(action.type) {

        case TODO_LIST_REQUEST:
            return {loading: true, TODOs: [] }

        case TODO_LIST_SUCCESS:
            return {loading: false, TODOs: action.payload}

        case TODO_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const TodoDetailsReducer = (state = {TODO: {reviews:[]} }, action) => {
    switch(action.type) {

        case TODO_DETAILS_REQUEST:
            return {loading: true, ...state }

        case TODO_DETAILS_SUCCESS:
            return {loading: false, TODO: action.payload}

        case TODO_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

 

//le reducer permet d'update la partie produit de l'etat
// on utilise des appels de fichiers differents pour les appels de nos etats
//Produce reducer d'occupe de dire si l'on charge une erreur si besoin, etc
// ce fichier entre autre retiens plusieurs "reducer"
/*
import { 
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL
 } from '../constants/TODOConstants'


//action (type d'action)est un objet
export const TODOListReducers = (state = {TODOs:[] }, action) => {
    switch(action.type){

//si le produit et chargé, object renvoyé en etat, la chaine de produit est vide car on charge des données
        case TODO_LIST_REQUEST:
            return {loading: true, TODOs: []}

//quand l'api revoi des données, loading est mis en false, on recupere le payload de l'api avec la liste de produit et on actualise la donnée
        case TODO_LIST_SUCCESS:
            return {loading: false, TODOs: action.payload}

// si on a un probleme (mauvaise donnée, etc) loading est sur false car on a deja load la donnée, on met erreur  
        case TODO_LIST_FAIL:
            return {loading: false, error: action.payload}

// si un de nos switch case ne marche pas, on revient à un etat initial
        default:
            return state
    }
}
*/
