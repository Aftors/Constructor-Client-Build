enum ActionTypes {
  GET_ALL = 'GET_ALL',
}

interface Fgfgg {
  user: any[]
  loading: boolean
  error: null | string
}

interface userAction {
  type: ActionTypes.GET_ALL
  payload?: any
}

const initState: Fgfgg = {
  user: [],
  loading: false,
  error: null,
}

export const reducer = (state = initState, action: userAction): Fgfgg => {
  switch (action.type) {
    case ActionTypes.GET_ALL:
      return { loading: true, error: null, user: action.payload }
  }
  return state
}
