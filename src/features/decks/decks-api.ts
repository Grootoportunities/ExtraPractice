import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks: () => instance.get<GetResponseType>('/v2/decks'),
  createDeck: (name: string) => instance.post<Deck>('/v1/decks', { name }),
}

export type Author = {
  id: string
  name: string
}

export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type GetResponseType = {
  items: Deck[]
  pagination: Pagination
}

// type GetResponseType = {
//   items: [
//     {
//       author: {
//         id: string
//         name: string
//       }
//       id: string
//       userId: string
//       name: string
//       isPrivate: boolean
//       cover: string
//       created: string
//       updated: string
//       cardsCount: number
//     },
//   ]
//   pagination: {
//     currentPage: number
//     itemsPerPage: number
//     totalPages: number
//     totalItems: number
//   }
// }
