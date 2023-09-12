import { lazy } from 'react'

const Layout = lazy(() => import('./Layout/Layout'))
const NewNoteForm = lazy(() => import('./NewNoteForm/NewNoteForm'))

export { Layout, NewNoteForm }
