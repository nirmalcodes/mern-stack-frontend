import React from 'react'
import moment from 'moment'
import DOMPurify from 'dompurify'

const NoteCard = ({ height, payload }) => {
    const { _id, title, content, createdAt, updatedAt } = payload

    const localDateTime = moment.utc(updatedAt).local()

    // Function to sanitize user-generated HTML content using DOMPurify
    const sanitizeHTML = (dirtyHTML) => {
        return DOMPurify.sanitize(dirtyHTML)
    }
    return (
        <>
            <div
                className=" rounded-md bg-white px-3 py-2"
                style={{
                    ...(height && { height: `${height}px` }),
                }}
            >
                <h4 className="mb-2 text-xl font-medium">{title}</h4>
                {/* <h4 className="mb-2 text-lg">{payload?.content}</h4> */}
                {/* <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={payload?.content}
                ></textarea> */}
                <div
                    className="border-none outline-none"
                    contentEditable={true}
                    aria-multiline={true}
                    role="textbox"
                    spellCheck={true}
                    dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(content.replace(/\n/g, '<br>')),
                    }}
                />
                <p>Edited: {localDateTime.format('YYYY-MM-DD HH:mm:ss')}</p>
            </div>
        </>
    )
}

export default NoteCard
