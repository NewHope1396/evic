"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import postData from "@/helpers/dataTgPost";
import { TypeConsultationInputs } from "@/interfaces/formType";
import { yupResolver } from "@hookform/resolvers/yup";
import { consultationFormSchema } from "@/schemas/formSchema";
import styles from "./ConsultationFom.module.scss";

export const ConsultationForm = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeConsultationInputs>({
    resolver: yupResolver(consultationFormSchema),
  });

  const onSubmit: SubmitHandler<TypeConsultationInputs> = (data) => {
    postData(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={errors.name && styles.isEmpty}
        placeholder="Ім'я"
        {...register("name")}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <input
        className={errors.tel && styles.isEmpty}
        placeholder="Телефон (Обов'язково)"
        {...register("tel")}
      />
      {errors.tel && <p className={styles.error}>{errors.tel.message}</p>}

      <input
        className={errors.comment && styles.isEmpty}
        placeholder="Коментар"
        {...register("comment")}
      />
      {errors.comment && (
        <p className={styles.error}>{errors.comment.message}</p>
      )}

      <button type="submit">ЗАМОВИТИ</button>
    </form>
  );
};
