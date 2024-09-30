import {createContext, useEffect, useReducer} from 'react'


const initial_state = {
     user: localStorage.getItem("User") !== undefined ? JSON.parse(localStorage.getItem("User")) : null,
     loading: false,
     error: null
}

export const AuthContext = createContext(initial_state)
// tạo một AuthContext chứa dữ liệu mà bạn muốn chia sẻ
// phương thức createContext trả về 2 đối tượng là Provider và Consumer

// Context:là một cơ chế cho phép bạn chia sẻ dữ liệu giữa các component mà không cần truyền props qua nhiều cấp độ
// useContext: là một hook giúp bạn sử dụng giá trị từ một context bất kỳ component con nào mà không cần truyền props qua nhiều cấp độ


const AuthReducer = (state, action) => {
     switch(action.type){
          case 'LOGIN_START':return{
               user: null,
               loading: true,
               error: null,
          };

          case 'LOGIN_SUCCESS':return{
               user: action.payload,
               loading: false,
               error: null,
          }

          case 'LOGIN_FAILURE':return{
               user: null,
               loading: false,
               error: action.payload,
          }

          case 'REGISTER_SUCCESS':return{
               user: null,
               loading: false,
               error: null,
          }

          case 'LOGOUT':return{
               user: null,
               loading: false,
               error: null,
          }

          case 'CREATE_FOOD_SUCCESS':return {
               ...state,
               user: {
                    ...state.user,
                    // foods: [...state.user.foods, action.payload.food],
               },
               loading: false,
               error: null,
          };


          case 'CREATE_PLAN_SUCCESS':return {
               ...state,
               user: {
                    ...state.user,
                    // plans: [...state.user.plans, action.payload.plan],
               },
               loading: false,
               error: null,
          };



          default:
          return state
     }
}

export const AuthContextProvider = ({children}) => {
     const [state, dispatch] = useReducer(AuthReducer, initial_state)
     

     useEffect(() => {
          localStorage.setItem('user', JSON.stringify(state.user))
     }, [state.user])

     return <AuthContext.Provider value={{ // value này là giá trị mà bạn muốn chia sẻ 
          user: state.user,
          loading: state.loading,
          error: state.error,
          dispatch,
     }}>
          {children}
     </AuthContext.Provider>
}