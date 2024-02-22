import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCount } from '../store/slices/count.slice'

export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(
    () =>
      bindActionCreators(
        {
          setCount,
        },
        dispatch
      ),
    [dispatch]
  )
}
