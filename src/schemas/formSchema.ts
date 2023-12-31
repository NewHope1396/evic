import * as yup from "yup";

const phoneRegExp = /^(\d{9}$)/

const formSchema = yup
    .object({
      tel: yup.string().matches(phoneRegExp, "Номер не введено або введено некоректно").required("Номер телефона обов'язковий"),
      name: yup.string().max(50, "Ім'я не може бути більше 50 символів").required("Ім'я має бути вказано обов'язково"),
      brand:yup.object().shape({ value: yup.string(), label: yup.string()}).nullable(),
      model:yup.object().shape({ value: yup.string(), label: yup.string()}).nullable(),
      area:yup.object().shape({ value: yup.string().required("Область потрібно обрати обов'язково"), label: yup.string().required()}).required(),
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