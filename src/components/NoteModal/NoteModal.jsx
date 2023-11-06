import DOMPurify from 'dompurify'
import React, { useRef, useState } from 'react'

const NoteModal = ({ children }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const titleEditableRef = useRef(null)
    const contentEditableRef = useRef(null)

    // we gonna use this key value to force to update editable div after entry saved
    const [key, setKey] = useState(1)

    const handleContentChange = (e) => {
        const newContent = e.target.innerHTML
        setContent(newContent)
    }

    // Function to sanitize user-generated HTML content using DOMPurify
    const sanitizeHTML = (dirtyHTML) => {
        return DOMPurify.sanitize(dirtyHTML)
    }

    return (
        <>
            <div className="fixed inset-0 z-[1] h-full w-full overflow-auto bg-black/25">
                <div className="container mx-auto flex min-h-screen max-w-screen-sm items-center bg-red-400 px-4">
                    <div className="w-full bg-white">
                        <div className="">
                            <form className="">
                                <div className="">
                                    <label htmlFor="">Content</label>
                                    <div
                                        aria-label="Note Content"
                                        className="border outline-none"
                                        contentEditable={true}
                                        aria-multiline={true}
                                        role="textbox"
                                        spellCheck={true}
                                        ref={contentEditableRef}
                                        onInput={handleContentChange}
                                        key={key}
                                        // dangerouslySetInnerHTML={{
                                        //     __html: sanitizeHTML(
                                        //         content.replace(/\n/g, '<br>')
                                        //     ),
                                        // }}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex">
                            <div className="ml-auto flex flex-row gap-x-4">
                                <button className="">Cancel</button>
                                <button className="">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteModal
