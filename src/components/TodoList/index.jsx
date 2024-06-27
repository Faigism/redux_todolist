import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { toggleTodoList } from '../../Slices/booleanSlice'
import { setDoneTodo, deleteTodo } from '../../Slices/dataSlice'

const TodoList = () => {
  const dataCount = useSelector((state) => state.value.data)
  const toggleTodo = useSelector((state) => state.boolean.todoList)
  const [doneIcon, setDoneIcon] = useState(null)

  const dispatch = useDispatch()

  const toggleList = () => {
    dispatch(toggleTodoList())
  }

  const todoDone = (data) => {
    dispatch(setDoneTodo(data))
    dispatch(deleteTodo(data))
    setDoneIcon(null)
  }

  const toggleDone = (indexNum) => {
    setDoneIcon(doneIcon === indexNum ? null : indexNum)
  }

  return (
    <div>
      <div className="todoNav">
        <div className="todoTitle" onClick={toggleList}>
          <p>Todo List</p>
          <span>{dataCount.length}</span>
        </div>
        {toggleTodo ? (
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
            {dataCount.map((data, index) => {
              return (
                <div key={nanoid()} className="list">
                  <span style={{ color: '#730a0a', fontWeight: 'bold' }}>
                    <span style={{ color: '#6e6c6c', fontWeight: 'bold' }}>
                      {index + 1 + '. '}
                    </span>
                    {data}
                  </span>
                  <div style={{ display: 'flex', gap: '10px', height: '18px' }}>
                    {doneIcon === index && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{
                          opacity: 0,
                          scale: 0.5,
                          transition: { duration: 0.5 },
                        }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        style={{ cursor: 'pointer', color: '#730a0a' }}
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          onClick={() => todoDone(data)}
                        />
                      </motion.span>
                    )}
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ cursor: 'pointer' }}
                      onClick={() => toggleDone(index)}
                    />
                  </div>
                </div>
              )
            })}
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}
export default TodoList
