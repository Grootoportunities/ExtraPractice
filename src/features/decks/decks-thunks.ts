import { Dispatch } from 'redux'
import { decksAPI } from './decks-api.ts'
import { createDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => (dispatch: Dispatch) =>
  decksAPI.fetchDecks().then((res) => dispatch(setDecksAC(res.data.items)))

export const createDeckTC = (name: string) => (dispatch: Dispatch) =>
  decksAPI.createDeck(name).then((res) => dispatch(createDeckAC(res.data)))
