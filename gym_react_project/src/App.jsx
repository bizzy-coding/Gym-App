export default function App() {
  return (
    <>
    <h1>Gym app</h1>
    <ChooseExercise />
    <button></button>
    </>
    
  )
}

// http://localhost:5173/

const exercises = [
  { title: 'squat', id: 1 },
  { title: 'benchpress', id: 2 },
  { title: 'deadlift', id: 3 },
];


function ChooseExercise() {

  const dropDown = document.createElement('select');

  const listExercises = exercises.map(exercise =>
    <option key={exercise.id}>
      {exercise.title}
    </option>
    )

    return (
      <select>
          {listExercises}
      </select>
    )

}