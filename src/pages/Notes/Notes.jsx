import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { MasonryGrid, NoteCard } from '../../components'
import DOMPurify from 'dompurify'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)

    const contentEditableRef = useRef(null)

    const handleContentChange = () => {
        const selection = window.getSelection()
        const range = selection.getRangeAt(0)
        setContent(contentEditableRef.current.innerHTML)
        selection.removeAllRanges()
        selection.addRange(range)
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

        try {
            // Use Axios for the POST request
            const response = await axios.post(
                'https://kkbrnh26-5050.asse.devtunnels.ms/api/notes',
                note,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (response.status === 200) {
                setError(null)
                setTitle('')
                setContent('')
                console.info('Data added successfully!', response.data)
            }
        } catch (error) {
            // console.log(error)
            setError(
                error.response.data.error ||
                    'An error occurred while adding the note.'
            )
            console.error('Data add failed !', error.response.data.error)
        }
    }

    // Function to sanitize user-generated HTML content using DOMPurify
    const sanitizeHTML = (dirtyHTML) => {
        return DOMPurify.sanitize(dirtyHTML)
    }

    const breakpoints = {
        default: 6,
        1200: 5,
        1024: 4,
        768: 3,
        700: 2,
        320: 1,
    }

    useEffect(() => {
        axios
            .get('https://kkbrnh26-5050.asse.devtunnels.ms/api/notes')
            .then((res) => {
                console.log(res.data)
                setNotes(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <MasonryGrid breakpoints={breakpoints} gutter={8} padding=".5em">
                {notes && notes.length > 0 ? (
                    notes.map((note) => (
                        <NoteCard
                            key={note?._id}
                            // height={
                            //     Math.floor(Math.random() * (450 - 150 + 1)) +
                            //     150
                            // }
                            payload={note}
                        />
                    ))
                ) : (
                    <p>No data to show</p>
                )}
            </MasonryGrid>

            <div className="">
                <form className="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">title </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="load">content </label>
                        <div
                            aria-label="Note Content"
                            className="border outline-none"
                            contentEditable={true}
                            aria-multiline={true}
                            role="textbox"
                            spellCheck={true}
                            ref={contentEditableRef}
                            onBlur={handleContentChange}
                            dangerouslySetInnerHTML={{
                                __html: sanitizeHTML(
                                    content.replace(/\n/g, '<br>')
                                ),
                            }}
                        />
                    </div>

                    <button type="submit">Submit</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </>
    )
}

export default Notes
