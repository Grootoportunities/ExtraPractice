import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useDecksList } from './hooks/useDecksList.ts'

export const DecksList = () => {
  const { decks } = useDecksList()

  const mappedDecks = decks.map((deck) => <DeckItem key={deck.id} deck={deck} />)

  return <ul className={s.list}>{mappedDecks}</ul>
}
