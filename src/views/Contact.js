import React, {useState, useContext, useEffect} from 'react'; // eslint-disable-line no-unused-vars
import AppContext from '../AppContext';

const Contact = () => {

  const {state, dispatch} = useContext(AppContext)

  useEffect(()=>{
    dispatch({
      type: "SET_SELECTED_PAGE",
      payload: 'contact'
    })
  }); // - if needing to compare with prev props: }, [itemsHere]);

  return (
    <div>
      <h1>Contact Page</h1>
      Selected Page (in View): {state.selectedPage}
    </div>
  )
}

export default Contact