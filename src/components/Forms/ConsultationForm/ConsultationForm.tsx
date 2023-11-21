"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import postData from "@/helpers/dataTgPost";
import { TypeConsultationInputs } from "@/interfaces/formType";
import { yupResolver } from "@hookform/resolvers/yup";
import { consultationFormSchema } from "@/schemas/formSchema";
import styles from "./ConsultationFom.module.scss";

export const ConsultationForm = () => {
  const {
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
    <div className={styles.formContainer}>
      <h3>Замовити консультацію</h3>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Ваше ім&apos;я<span>*</span>
        </label>
        <input
          id="name"
          className={errors.name && styles.isEmpty}
          {...register("name")}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <div className={styles.telContainer}>
          <div className={styles.countryCode}>+380</div>
          <input
            className={errors.tel && styles.isEmpty}
            placeholder="Телефон (Обов'язково)"
            {...register("tel")}
          />
        </div>
        {errors.tel && <p className={styles.error}>{errors.tel.message}</p>}

        <textarea
          className={errors.comment && styles.isEmpty}
          placeholder="Коментар"
          {...register("comment")}
        />

        {errors.comment && (
          <p className={styles.error}>{errors.comment.message}</p>
        )}

        <button type="submit">ЗАМОВИТИ</button>
      </form>
    </div>
  );
};
