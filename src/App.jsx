import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Notes } from './pages'

function App() {
    return (
        <>
            <div className="bg-[#f1f1f1]">
                <Suspense fallback={'Loading...'}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Notes />} />
                        </Routes>
                    </Layout>
                </Suspense>
            </div>
        </>
    )
}

export default App
