import React, {useState, useContext, useEffect} from 'react'; // eslint-disable-line no-unused-vars
import AppContext from '../AppContext';

const Home = (props) => { // note: props is needed for history push

  const {state, dispatch} = useContext(AppContext)

  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_PAGE",
      payload: 'home'
    })
  }); // - if needing to compare with prev props: }, [itemsHere]);

  const sampleRedirect = () => {
    props.history.push('/about')
  }

  return (
    <div>
      <h1><i className="fa fa-home"></i> Home Page</h1>
      Selected Page (in View): {state.selectedPage}<br /><br />
      <button onClick={()=>{
          sampleRedirect()}}> go home redirect via history push
      </button>
    </div>
  );
}

export default Home