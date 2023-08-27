// WorkoutForm.jsx
import { useState } from 'react'

const WorkoutForm = () => {
  // Create state for each of the properties of the new workout.
  // E.G. title, reps, load

  const [title, setTitle] = useState('') 
  const [reps, setReps] = useState('') 
  const [load, setLoad] = useState('') 

  return (
    <form className="create">
      <h3>Add a new workout</h3>
      <label>Exercise Title</label>
      <input
        type="text" 
        placeholder="E.G. Video Games"
        onChange={ (evt) => setTitle(evt.target.value)}
        // Two-way binding approach
        value={title}
      />
    </form>
  )
}

export default WorkoutForm

