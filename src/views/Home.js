import React, {useState, useContext, useEffect} from 'react'; // eslint-disable-line no-unused-vars
import AppContext from '../AppContext';
//import { useRouter } from '../hooks/use-router';

const Home = (props) => { // note: props is needed for history push

  const {state, dispatch} = useContext(AppContext)
  //const router = useRouter();

  useEffect(() => {
    dispatch({
      type: "SET_SELECTED_PAGE",
      payload: 'home'
    })
  }); // - if needing to compare with prev props: }, [itemsHere]);

  const sampleRedirect = () => { 
    //console.log(router.pathname)
    //router.push('/about')
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