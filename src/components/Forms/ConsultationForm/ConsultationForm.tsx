"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import postData from "@/helpers/dataTgPost";
import { TypeConsultationInputs } from "@/interfaces/formType";
import { yupResolver } from "@hookform/resolvers/yup";
import { consultationFormSchema } from "@/schemas/formSchema";
import styles from "./ConsultationFom.module.scss";
import { FC } from "react";
import { unlockScroll } from "@/helpers/blockScroll";
import Image from "next/image";
import Close from "@/public/x.svg";
import RedStar from "@/public/redStar.svg";

export const ConsultationForm: FC<{
  setModalOpen: Function;
  toast: any;
}> = ({ setModalOpen, toast }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeConsultationInputs>({
    resolver: yupResolver(consultationFormSchema),
  });

  const onSubmit: SubmitHandler<TypeConsultationInputs> = (data) => {
    toast.promise(postData({ ...data, type: "consultation" }), {
      pending: "Зачекайте...",
      success: "Запит надіслано👌 Очікуйте на дзвінок",
      error: "Оу, щось пішло не так 🤯",
    });
    reset();
  };

  return (
    <div className={styles.formContainer}>
      <h3>Замовити консультацію</h3>
      <div
        onClick={() => {
          setModalOpen(false);
          unlockScroll();
        }}
        className={styles.closeModal}
      >
        <Image alt="close" src={Close} />
      </div>
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

        <label htmlFor="tel">
          Телефон<span>*</span>
        </label>
        <div className={styles.telContainer}>
          <div className={styles.countryCode}>+380</div>
          <input
            id="tel"
            className={errors.tel && styles.isEmpty}
            placeholder="00 000 00 00"
            {...register("tel")}
          />
        </div>
        {errors.tel && <p className={styles.error}>{errors.tel.message}</p>}

        <label htmlFor="comment">Коментарі</label>
        <textarea
          id="comment"
          className={errors.comment && styles.isEmpty}
          {...register("comment")}
        />

        {errors.comment && (
          <p className={styles.error}>{errors.comment.message}</p>
        )}

        <div className={styles.requiredMark}>
          <Image alt="redStar" src={RedStar} />
          <p className={styles.p}>- обов&apos;язкове для заповнення поле</p>
        </div>

        <button type="submit">Замовити</button>
      </form>
    </div>
  );
};
