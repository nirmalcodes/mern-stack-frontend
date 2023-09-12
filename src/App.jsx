import React, { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { Layout } from './components'

function App() {
    return (
        <>
            <div className="min-h-screen bg-[#f1f1f1] flex flex-col">
                <Suspense fallback={'Loading...'}>
                    <Layout>
                        {/* <Routes></Routes> */}
                        hello
                    </Layout>
                </Suspense>
            </div>
        </>
    )
}

export default App
