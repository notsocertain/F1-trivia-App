import axios from "axios";
axios.defaults.withCredentials = true;
import { errorToast, successToast } from "./toastify.service";

export const postSignup = async (url, data) => {
    try {
    const response = await axios.post(
        `http://localhost:8000/api/${url}`,
        data
      );
      console.log(response.data);
      successToast(response.data.message);
      return response.data;
    } catch (error) {
      console.error(error);
      errorToast(error.response.data.error);

    }
  };

  export const postLogin = async (url, data) => {
    try {
    const response = await axios.post(
        `http://localhost:8000/api/${url}`,
        data
      );
      // console.log(response);
      successToast(response.data.message);
      return response.data;
      
    } catch (error) {
      errorToast(error.response.data.error);

    }
  };

  export const getCategories = async(url)=>{
    try{
        const response = await axios.get(
            `http://localhost:8000/api/${url}`,
            { withCredentials: true ,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  }
                }
        );
        return {
            status: response.status,
            data: response.data,
          };
    }catch(error){
        console.error(error);
    }
  };

  export const getQuestionsByCategory = async(url)=>{
    try{
        const response = await axios.get(
            `http://localhost:8000/api/${url}`,
            { withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  } }
        );
        return response.data;

    }catch(error){
        console.error(error);
    }
  }

  export const getQuizResults = async(url)=>{
    try{
        const response = await axios.get(
            `http://localhost:8000/api/${url}`,
            { withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  } }
        );
        return response.data;
    }catch(error){
        console.error(error)
    }
  }
  
  export const isAuth = async(url)=>{
    try{
        const response = await axios.get(
            `http://localhost:8000/api/${url}`,
            { withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  } }
        );
        return response.data;
    }catch(error){
        console.error(error)
    }
  }

  export const storeResult = async(url,data)=>{
    try{
        const response = await axios.post(
            `http://localhost:8000/api/${url}`,
            data
        );
        console.log(response.data)
        return response.data;
    }catch(error){
        console.error(error)
    }
  }

  export const getScore = async(url,data)=>{
    try{
        const response = await axios.get(
            `http://localhost:8000/api/${url}`,
            data
        );
        console.log(response.data)
        return response.data;
    }catch(error){
        console.error(error)
    }
  }
  export const logout = async(url)=>{
    try{
        const response = await axios.get(
            `http://localhost:8000/api/${url}`,
        );
        console.log(response)
        console.log(response.data.message)
        successToast(response.data.message);
        return response.data;
    }catch(error){
        console.error(error)
    }
  }