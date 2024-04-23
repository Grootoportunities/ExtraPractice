import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET_DECKS':
      return { ...state, decks: action.decks }

    case 'DECKS/CREATE_DECK':
      return { ...state, decks: [action.deck, ...state.decks] }

    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({ type: 'DECKS/SET_DECKS', decks }) as const
export const createDeckAC = (deck: Deck) => ({ type: 'DECKS/CREATE_DECK', deck }) as const

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof createDeckAC>
