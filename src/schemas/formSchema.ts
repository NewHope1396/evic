import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchema = yup
    .object({
      tel: yup.string().matches(phoneRegExp, "Номер не введено або введено некоректно").required("Номер телефона обов'язковий"),
      name: yup.string().max(50, "Ім'я не може бути більше 50 символів"),
      brand:yup.object().shape({ value: yup.string(), label: yup.string()}).nullable(),
      model:yup.object().shape({ value: yup.string(), label: yup.string()}).nullable(),
      comment: yup.string().max(150, "Комментар має бути не більше 150 символів")
    })
.required();

export const consultationFormSchema = yup
  .object({
    name: yup.string().max(50, "Ім'я не може бути більше 50 символів").required("Ім'я треба вказати обов'язково"),
    tel: yup.string().matches(phoneRegExp, "Номер не введено або введено некоректно").required("Номер телефона обов'язковий"),
    comment: yup.string().max(150, "Комментар має бути не більше 150 символів")

  })
.required();
    
export default formSchema;