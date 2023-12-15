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
import RedStar from "@/public/redStar.svg";

const Form: FC<{ makes: IMakeData; setModalOpen: Function; toast: any }> = ({
  makes,
  setModalOpen,
  toast,
}) => {
  const makesRef = useRef<SelectInstance>(null);
  const modelsRef = useRef<SelectInstance>(null);
  const areaRef = useRef<SelectInstance>(null);

  const resetSelects = () => {
    makesRef?.current?.clearValue();
    modelsRef?.current?.clearValue();
    areaRef?.current?.clearValue();
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeInputs>({ resolver: yupResolver(formSchema) });

  const onSubmit: SubmitHandler<TypeInputs> = (data) => {
    toast.promise(postData({ ...data, type: "order" }), {
      pending: "Зачекайте...",
      success: "Запит надіслано👌 Очікуйте на дзвінок",
      error: "Оу, щось пішло не так 🤯",
    });
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
      <div className={styles.hat}>
        <h3>Онлайн-замовлення евакуатора</h3>
        <p>Заповніть форму для більш швидкої комунікації з диспетчером.</p>
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

        <div className={styles.selectsContainer}>
          <div className={styles.selectWrap}>
            <label htmlFor="brand">Марка</label>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  id="brand"
                  noOptionsMessage={() => "Нічого не знайдено"}
                  isClearable
                  placeholder={""}
                  className="select"
                  classNamePrefix="select"
                  ref={makesRef}
                  onChange={(e) => {
                    onBrandChange(e);
                    field.onChange(e);
                  }}
                  instanceId="makes-select-id"
                  options={makes.makes}
                />
              )}
            />
          </div>

          <div className={styles.selectWrap}>
            <label htmlFor="model">Модель</label>
            <Controller
              name="model"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  id="model"
                  isClearable
                  className="select"
                  classNamePrefix="select"
                  ref={modelsRef}
                  noOptionsMessage={() => "Нічого не знайдено"}
                  instanceId="model-select-id"
                  placeholder={""}
                  options={modelOptions}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.areaContainer}>
          <label htmlFor="area">
            Область<span>*</span>
          </label>
          <Controller
            name="area"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                id="area"
                ref={areaRef}
                placeholder={""}
                className="areaSelect"
                classNamePrefix="select"
                noOptionsMessage={() => "Нічого не знайдено"}
                instanceId="area-select-id"
                options={areaOptions}
              />
            )}
          />
        </div>
        {errors.area?.value?.message && (
          <p className={styles.error}>{errors.area.value.message}</p>
        )}

        <label htmlFor="comment">Комментар</label>
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

        <button type="submit">Замовити евакуатор</button>
      </form>
    </div>
  );
};

export default Form;
