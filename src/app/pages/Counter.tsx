import { RootState } from '../../app/store'
import { useAppDispatch, useAppSelector } from '../hooks'
import { decrement, increment } from '@Features/counterSlice'

const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
