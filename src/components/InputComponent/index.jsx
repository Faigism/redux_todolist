import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDataValue } from '../../Slices/dataSlice'

const InputComponent = () => {
  const [data, setData] = useState('')
  const dispatch = useDispatch()

  const handleInput = (e) => {
    setData(e.target.value)
  }

  const handleData = () => {
    if (data.trim()) {
      dispatch(setDataValue(data))
      setData('')
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Add Todo..."
        onChange={handleInput}
        value={data}
        className="form-input"
        onKeyDown={(e) => e.key === 'Enter' && handleData()}
      />
      <button className="btn" type="submit" onClick={handleData}>
        Send
      </button>
    </div>
  )
}
export default InputComponent
