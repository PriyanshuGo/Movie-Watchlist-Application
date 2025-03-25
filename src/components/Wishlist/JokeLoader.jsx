import axios from "axios";

const API = "https://official-joke-api.appspot.com/jokes/random";
export const JokeLoader = async () => {
    try {
      const res = await axios.get(API);
      return res;
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  
}