import React, { Suspense } from 'react'
import { Routes } from 'react-router-dom'
import { Layout } from './components'

function App() {
    return (
        <>
            <div className="flex min-h-screen flex-col bg-[#f1f1f1]">
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
