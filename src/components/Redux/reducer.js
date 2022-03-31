import actionCreator from './actionCreator';
import axios from 'axios'
export const  LOGIN_SUCCESS= 'LOGIN_SUCCESS';


const signInUser = async ({ email, password}) => {
  let res;
  try {
    res = await axios.post('https://demoapi.remis.ng//login', {
      email,
      password,
    });
     dispatch(
      actionCreator(LOGIN_SUCCESS, {
        ...response.user,
      })
    );
    console.log(res)
    //window.location.href = "../home";
  } catch (e) {
    console.log(e);

    }
    return res.data;
  }