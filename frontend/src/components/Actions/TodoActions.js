import axios from 'axios'
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

export const listTODOs = () => async (dispatch) => {
    try {
        dispatch({type: TODO_LIST_REQUEST})

        const { data } = await axios.get(`/todo/`)

        dispatch({
            type:TODO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TODO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}

export const listTags = () => async (dispatch) => {
    try {
        dispatch({type: TODO_LIST_REQUEST})

        const { data } = await axios.get(`/taggit/`)

        dispatch({
            type:TODO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TODO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const listWines = () => async (dispatch) => {
    try {
        dispatch({type: TODO_LIST_REQUEST})

        const { data } = await axios.get(`/taggit/`)

        dispatch({
            type:TODO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TODO_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}



export const listTODOsDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: TODO_DETAILS_REQUEST})

        const { data } = await axios.get(`/TODOs/${id}`)

        dispatch({
            type:TODO_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TODO_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }

}

export const createTODOReview = (TODOId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TODO_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/TODOs/${TODOId}/reviews/`,
            review,
            config
        )
        dispatch({
            type: TODO_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: TODO_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

/*Code au cas ou ça ne marche pas

import { 
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL
 } from '../constants/TODOConstants'

export const listTODOs = () => async (dispatch) => {
    try{
        dispatch({ type: TODO_LIST_REQUEST })
        */
/*
 on recupere via l'url /TODO qui nous permet de recuperer les données en JSON des produits
 on importe axios en recuperant la fonction permettant de faire un call de l'api pour la partie /TODOs
*/
/*
    const { data } = await axios.get('/TODOs/')

        dispatch({
            type: TODO_LIST_SUCCESS,
            payload: data
        })
        */
/*
 on fait un try catch classique,
 si on a une erreur, avec dispatch on revoi le type d'erreur, et avec payload on renvoir une erreure calssique ou custom a l'utilisateur
si on a un message custom data.message renvoi le message
si pas de custom message, error.message renvoi le message par defaut
*/
/*
    } catch(error) {
            dispatch({
                type:TODO_LIST_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })

    }
 }
 */
