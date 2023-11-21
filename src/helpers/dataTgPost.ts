import TypeInputs, { TypeConsultationInputs } from "@/interfaces/formType"
import axios from "axios";

const postData = async (data: TypeInputs | TypeConsultationInputs) => {
  try {
    const result = await axios.post("https://tg-evic-bot.onrender.com/sendData", data)
    console.log(result)
  } catch (error: any) {
    console.log(error.message)
  }
}

export default postData