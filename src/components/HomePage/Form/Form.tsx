"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styles from "./Form.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import { IMakeData, IMake } from "@/interfaces/make.interface";
import CreatableSelect from "react-select/creatable";
import { SingleValue, SelectInstance } from "react-select";
import carFetchers from "@/helpers/carFetchers";

const Form: FC<IMakeData> = ({ makes }) => {
  type Inputs = {
    tel: Number;
    name: string;
    brand: { label: string; value: string };
    model: { label: string; value: string };
    comment: string;
  };

  const makesRef = useRef<SelectInstance>(null);
  const modelsRef = useRef<SelectInstance>(null);

  const resetFilters = () => {
    makesRef?.current?.clearValue();
    modelsRef?.current?.clearValue();
  };

  const { control, register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    resetFilters();
    reset();
  };

  const [brand, setBrand] = useState("");
  const [modelOptions, setModelOptions] = useState<IMake[]>();

  const onBrandChange = (e: any) => {
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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Телефон" {...register("tel")} />
      <input placeholder="Ім'я" {...register("name")} />

      <Controller
        name="brand"
        control={control}
        render={({ field }) => (
          <CreatableSelect
            {...field}
            ref={makesRef}
            onChange={(e) => {
              onBrandChange(e);
              field.onChange(e);
            }}
            instanceId="makes-select-id"
            placeholder={"Марка"}
            options={makes}
          />
        )}
      />

      <Controller
        name="model"
        control={control}
        render={({ field, fieldState: onChange }) => (
          <CreatableSelect
            {...field}
            ref={modelsRef}
            noOptionsMessage={() => "Спочатку виберіть Марку"}
            instanceId="model-select-id"
            placeholder={"Модель"}
            options={modelOptions}
          />
        )}
      />

      <input placeholder="Коментар" {...register("comment")} />

      <button type="submit">ЗАМОВИТИ</button>
    </form>
  );
};

export default Form;
