import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Notes = () => {
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:4000/api/workouts')
            .then((res) => {
                console.log(res.data)
                setWorkouts(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        try {
            // Use Axios for the POST request
            const response = await axios.post(
                'http://localhost:4000/api/workouts',
                workout,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (response.status === 200) {
                setError(null)
                setTitle('')
                setLoad('')
                setReps('')
                console.info('Data added successfully!', response.data)
            }
        } catch (error) {
            // console.log(error)
            setError(
                error.response.data.error ||
                    'An error occurred while adding the workout.'
            )
            console.error('Data add failed !', error.response.data.error)
        }
    }
    return (
        <>
            <div className="mx-auto w-[80%] p-8">
                <div className="grid grid-cols-4 mb-8 gap-4 ">
                    {workouts && workouts.length > 0 ? (
                        workouts.map((workout) => (
                            <div
                                className="mb-4 bg-white shadow-md px-4 py-2 rounded"
                                key={workout?._id}
                            >
                                <h4 className="text-xl mb-2 font-medium">
                                    {workout?.title}
                                </h4>
                                <p className="font-medium">
                                    Reps: {workout?.reps}
                                </p>
                                <p className="font-medium">
                                    Load: {workout?.load}
                                </p>
                                <p className="text-sm mt-2">
                                    {workout?.createdAt}
                                </p>
                                <p className="text-sm mt-2">{workout?._id}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data to show</p>
                    )}
                </div>

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
                            <label htmlFor="load">load </label>
                            <input
                                type="text"
                                id="load"
                                name="load"
                                value={load}
                                onChange={(e) => setLoad(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="reps">reps </label>
                            <input
                                type="text"
                                id="reps"
                                name="reps"
                                value={reps}
                                onChange={(e) => setReps(e.target.value)}
                            />
                        </div>

                        <button type="submit">Submit</button>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Notes
