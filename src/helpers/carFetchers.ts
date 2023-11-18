import { IMake, IMakeData } from "@/interfaces/make.interface";
import axios from "axios";

axios.defaults.baseURL = "https://cars-api-6lqp.onrender.com"


const getMakes: (() => Promise<IMake[]>) = async () => {
  try {
    const makes = await axios.get("/makes");
    return(makes.data)
  } catch (error: any) {
    console.log(error.message)  
  }
};

const getModels: ((brand: string) => Promise<IMake[]>) = async (brand) => {
  try {
    const models = await axios.get(`/makes/models/${brand}`);
    return(models.data)
  } catch (error: any) {
    console.log(error.message)  
  }
};

const carFetchers = {
  getMakes,
  getModels
};

export default carFetchers;
