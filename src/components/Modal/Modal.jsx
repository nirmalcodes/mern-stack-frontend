import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Modal = ({ header = 'Title', children }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [titlekey, setTitleKey] = useState(1)
    const [contentkey, setContentKey] = useState(1)

    const contentEditableRef = useRef(null)

    const handleTitleChange = (e) => {
        const newTitle = e.target.innerHTML
        setTitle(newTitle)
    }
    const handleContentChange = (e) => {
        const newContent = e.target.innerHTML
        setContent(newContent)
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Clean up the content before saving
        const cleanedContent = content
            .replace(/<div>/g, '\n')
            .replace(/<br>/g, '')
            .replace(/<\/div>/g, '')

        const note = { title, content: cleanedContent }
        // const note = { title, content }

        console.log(note)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {header && header}
                                    </Dialog.Title> */}
                                    <div className="py-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className="">
                                                <div
                                                    aria-label="Note Title"
                                                    placeholder="Title"
                                                    className="note-input"
                                                    contentEditable={true}
                                                    aria-multiline={true}
                                                    role="textbox"
                                                    spellCheck={true}
                                                    ref={contentEditableRef}
                                                    onInput={handleTitleChange}
                                                    key={`title-${titlekey}`}
                                                />
                                                <div
                                                    aria-label="Note Content"
                                                    placeholder="Content"
                                                    className="note-input"
                                                    contentEditable={true}
                                                    aria-multiline={true}
                                                    role="textbox"
                                                    spellCheck={true}
                                                    ref={contentEditableRef}
                                                    onInput={
                                                        handleContentChange
                                                    }
                                                    key={`content-${contentkey}`}
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    // onClick={closeModal}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal
