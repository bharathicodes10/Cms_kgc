import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useRef,
  } from 'react';
  import reducer from './reducer';
  
  const initialState = {
    currentUser: null,
    openLogin: false,
    loading: false,
    alert: { open: false, severity: 'info', message: '' },
    img: { open: false, file: null, photoURL: '' },
    categories: [],
    details: { title: '', description: '', price: 0 },
    location: { lng: 0, lat: 0 },
    priceFilter: 50,
    users: [],
  };
  
  const Context = createContext(initialState);
  
  export const useValue = () => {
    return useContext(Context);
  };
  
  const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const mapRef = useRef();
    const containerRef = useRef();
    useEffect(() => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        dispatch({ type: 'UPDATE_USER', payload: currentUser });
      }
    }, []);
    return (
      <Context.Provider value={{ state, dispatch, mapRef, containerRef }}>
        {children}
      </Context.Provider>
    );
  };
  
  export default ContextProvider;