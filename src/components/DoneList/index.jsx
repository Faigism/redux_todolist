import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { toggleDoneList } from '../../Slices/booleanSlice'
import { deleteDone } from '../../Slices/dataSlice'

const DoneList = () => {
  const dataDone = useSelector((state) => state.value.dataDone)
  const toggleDone = useSelector((state) => state.boolean.doneList)
  const dispatch = useDispatch()

  const handleDone = () => {
    dispatch(toggleDoneList())
  }

  const removeDone = (data) => {
    dispatch(deleteDone(data))
  }

  return (
    <div className="todoNav">
      <div className="todoTitle" onClick={handleDone}>
        <p>Done List</p>
        <span>{dataDone.length}</span>
      </div>
      {toggleDone ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="motionDiv"
        >
          {dataDone.map((data, index) => {
            return (
              <div key={index} className="list">
                <span style={{ color: '#196c00', fontWeight: 'bold' }}>
                  <span style={{ color: '#6e6c6c', fontWeight: 'bold' }}>
                    {index + 1 + '. '}
                  </span>
                  {data}
                </span>
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: 'pointer' }}
                  onClick={() => removeDone(data)}
                />
              </div>
            )
          })}
        </motion.div>
      ) : null}
    </div>
  )
}
export default DoneList
