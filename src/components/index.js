import { lazy } from 'react'

const Layout = lazy(() => import('./Layout/Layout'))
const MasonryGrid = lazy(() => import('./MasonryGrid/MasonryGrid'))
const NewNoteButton = lazy(() => import('./NewNoteButton/NewNoteButton'))
const NewNoteForm = lazy(() => import('./NewNoteForm/NewNoteForm'))
const NoteCard = lazy(() => import('./NoteCard/NoteCard'))
const NoteModal = lazy(() => import('./NoteModal/NoteModal'))
const Modal = lazy(() => import('./Modal/Modal'))

export {
    Layout,
    MasonryGrid,
    NewNoteButton,
    NewNoteForm,
    NoteCard,
    NoteModal,
    Modal,
}
