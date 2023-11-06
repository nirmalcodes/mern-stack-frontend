import React from 'react'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

const NewNoteButton = () => {
    return (
        <>
            <button className="grid aspect-square w-full place-items-center rounded-md border-2 border-dashed border-[#2d2d2d] bg-white p-4">
                <div>
                    <DocumentTextIcon
                        strokeWidth={1}
                        className="mx-auto h-16 w-16"
                    />
                    <p className="text-center font-medium">Add New Note</p>
                </div>
            </button>
        </>
    )
}

export default NewNoteButton
