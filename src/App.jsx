import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
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

    return (
        <>
            <div className="">
                {workouts.length > 0 ? (
                    workouts.map((workout, _) => (
                        <div className="mb-4" key={workout?._id}>
                            <h4 className="">{workout?.title}</h4>
                            <p className="">Reps: {workout?.reps}</p>
                            <p className="">Load: {workout?.load}</p>

                            <div className="mt-4">
                                <h4 className="">doc details</h4>
                                <p className="">ID: {workout?._id}</p>
                                <p className="">
                                    Created At: {workout?.createdAt}
                                </p>
                                <p className="">
                                    Updated At: {workout?.updatedAt}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No data to show</p>
                )}
            </div>
        </>
    )
}

export default App
