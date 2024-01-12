import axios from "axios";
axios.defaults.withCredentials = true;

export const postSignup = async (url, data) => {
    try {
    const response = await axios.post(
        `http://localhost:8000/api/${url}`,
        data
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  export const postLogin = async (url, data) => {
    try {
    const response = await axios.post(
        `http://localhost:8000/api/${url}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(error);
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