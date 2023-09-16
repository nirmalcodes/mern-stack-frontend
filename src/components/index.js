import { lazy } from 'react'

const Layout = lazy(() => import('./Layout/Layout'))
const NewNoteForm = lazy(() => import('./NewNoteForm/NewNoteForm'))
const NoteCard = lazy(() => import('./NoteCard/NoteCard'))
const MasonryGrid = lazy(() => import('./MasonryGrid/MasonryGrid'))

export { Layout, NewNoteForm, NoteCard, MasonryGrid }
