"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styles from "./Form.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import { IMakeData, IMake } from "@/interfaces/make.interface";
import Select from "react-select";
import { SelectInstance } from "react-select";
import carFetchers from "@/helpers/carFetchers";
import TypeInputs from "@/interfaces/formType";
import postData from "@/helpers/dataTgPost";
import formSchema from "@/schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { areaOptions } from "@/data/areaOptions";
import Image from "next/image";
import { unlockScroll } from "@/helpers/blockScroll";
import Close from "@/public/x.svg";

const Form: FC<{ makes: IMakeData; setModalOpen: Function }> = ({
  makes,
  setModalOpen,
}) => {
  const makesRef = useRef<SelectInstance>(null);
  const modelsRef = useRef<SelectInstance>(null);

  const resetSelects = () => {
    makesRef?.current?.clearValue();
    modelsRef?.current?.clearValue();
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeInputs>({ resolver: yupResolver(formSchema) });

  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    postData({ ...data, type: "order" });
    resetSelects();
    reset();
  };

  const [brand, setBrand] = useState("");
  const [modelOptions, setModelOptions] = useState<IMake[]>();

  const onBrandChange = (e: any) => {
    modelsRef?.current?.clearValue();
    e && setBrand(e.value);
  };

  useEffect(() => {
    const getModel = async () => {
      if (brand) {
        const models = await carFetchers.getModels(brand);
        setModelOptions(models);
      }
    };

    getModel();
  }, [brand]);

  return (
    <div className={styles.formContainer}>
      <div>
        <h3>Онлайн-замовлення евакуатора</h3>
        <p>Заповніть форму для більш швидкої комунікації с діспечиром.</p>
      </div>
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
        <input
          className={errors.tel && styles.isEmpty}
          placeholder="Телефон (Обов'язково)"
          {...register("tel")}
        />
        {errors.tel && <p className={styles.error}>{errors.tel.message}</p>}
        <input
          className={errors.name && styles.isEmpty}
          placeholder="Ім'я"
          {...register("name")}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              noOptionsMessage={() => "Нічого не знайдено"}
              isClearable
              classNamePrefix="select"
              ref={makesRef}
              onChange={(e) => {
                onBrandChange(e);
                field.onChange(e);
              }}
              instanceId="makes-select-id"
              placeholder={"Марка"}
              options={makes.makes}
            />
          )}
        />

        <Controller
          name="model"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              isClearable
              classNamePrefix="select"
              ref={modelsRef}
              noOptionsMessage={() => "Нічого не знайдено"}
              instanceId="model-select-id"
              placeholder={"Модель"}
              options={modelOptions}
            />
          )}
        />

        <Controller
          name="area"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              isClearable
              classNamePrefix="select"
              noOptionsMessage={() => "Нічого не знайдено"}
              instanceId="area-select-id"
              options={areaOptions}
            />
          )}
        />
        {errors.area?.value?.message && (
          <p className={styles.error}>{errors.area.value.message}</p>
        )}

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
    </div>
  );
};

export default Form;
