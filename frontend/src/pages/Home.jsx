import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts, setWorkouts] = useState([])


  useEffect( () => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      console.log("response", response)
      const json = await response.json()
      console.log("json", json)
      if (response.ok) {
        
        // Do something
        setWorkouts(json)
        
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <>
    <WorkoutForm />
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map( (workout) => (
          // <p key={workout._id}>{workout.title}</p>

          // Workout is assigned the entire workout object
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}        
      </div>
    </div>
    </>
    
  )
}

export default Home