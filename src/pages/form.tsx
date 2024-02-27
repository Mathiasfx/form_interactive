/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import {
  wordsStep1,
  wordsStep2,
  wordsStep3,
  wordsStep4,
  wordsStep5,
} from "../utils/texts";
import { DotBackground } from "../components/ui/dotBackground";
import { useNavigate } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logopi.svg";
import "../css/toggle.css";

type FormValuesStep1 = {
  nombre: string;
};

type FormValuesStep2 = {
  email: string;
};

type FormValuesStep3 = {
  utn: boolean;
};

type FormValuesStep4 = {
  posicion: string;
};

type FormValuesStep5 = {
  linkedin: string;
};

const Step1 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep1> }) => {
  const { register, handleSubmit } = useForm<FormValuesStep1>();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep1} />
        <div className="flex flex-col w-full ">
          <input
            className="m-4  bg-black text-white text-lg p-2 rounded border border-gray-300 border-opacity-35"
            {...register("nombre", { required: true })}
          />
          <label className="text-white text-left pl-5">
            <p className="text-sm  font-nunito-regular">
              *Lo necesitamos para inscribirte al evento
            </p>
          </label>
        </div>
        <div className="flex w-full justify-end items-end">
          <button className="text-white mt-3 pr-5 text-right" type="submit">
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </button>
        </div>
      </form>
    </div>
  );
};

const Step2 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep2> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep2>();

  //const { register, handleSubmit } = useForm<FormValuesStep2>();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep2} />
        <div className="flex flex-col w-full">
          <input
            className="m-4 bg-black text-white text-4xl p-2 rounded border border-gray-300 w-full"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Ingrese un correo electrónico válido",
              },
            })}
          />
          <label className="text-white text-left pl-5">
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
        </div>

        <div className="flex w-full justify-end items-end">
          <button className="text-white mt-3 pr-5 text-right" type="submit">
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </button>
        </div>
      </form>
    </div>
  );
};

const Step3 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep3> }) => {
  const { register, handleSubmit } = useForm<FormValuesStep3>();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep3} />
        <div className="flex w-full items-center justify-center">
          <label className="toggle justify-center">
            <input
              type="checkbox"
              className="toggle-checkbox"
              {...register("utn")}
              onChange={handleToggleChange}
            />
            <span className="toggle-slider round"></span>
          </label>
          <span className="m-4 flex items-center text-white text-2xl p-2">
            {isChecked ? "SI" : "NO"}
          </span>
        </div>

        <div className="flex w-full justify-end items-end">
          <button className="text-white mt-3 pr-5 text-right" type="submit">
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </button>
        </div>
      </form>
    </div>
  );
};

const Step4 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep4> }) => {
  const { register, handleSubmit } = useForm<FormValuesStep4>();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep4} />
        <div className="flex flex-col w-full">
          <input
            className="m-4 bg-black text-white text-4xl p-2 rounded border border-gray-300 w-full"
            {...register("posicion", { required: true })}
          />
          <label className="text-white text-left pl-5">
            <p className="text-sm  font-nunito-regular">
              *Ej: Ingeniería en Sistemas
            </p>
          </label>
        </div>

        <div className="flex w-full justify-end items-end">
          <button className="text-white mt-3 pr-5 text-right" type="submit">
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </button>
        </div>
      </form>
    </div>
  );
};

const Step5 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep5> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep5>();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep5} />
        <div className="flex flex-col w-full">
          <input
            className="m-4 bg-black text-white text-4xl p-2 rounded border border-gray-300 w-full "
            {...register("linkedin", {
              required: false,
              pattern: {
                value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/,
                message: "Ingrese una URL de LinkedIn válida",
              },
            })}
          />
          <label className="text-white text-left pl-5">
            {errors.linkedin && (
              <span className="text-red-500">{errors.linkedin.message}</span>
            )}

            <p className="text-sm  font-nunito-regular">
              *Cuando tengamos vacantes abiertas, podemos contactarnos según tu
              perfil (Opcional)
            </p>
          </label>
        </div>

        <div className="flex w-full justify-end items-end">
          <button className="text-white mt-3 pr-5 text-right" type="submit">
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </button>
        </div>
      </form>
    </div>
  );
};

const Form = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleStepSubmit = (data: Record<string, any>) => {
    setFormData({ ...formData, ...data });
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(formData);
    }
  };

  const handleSubmit: SubmitHandler<Record<string, any>> = (data) => {
    console.log("Datos del formulario:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/thanks");
    }, 3000);
    // Aquí iría la lógica para enviar los datos al servidor
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between items-center relative">
      <DotBackground>
        <div className="flex w-80 sm:w-full md:w-80 lg:w-1/2 flex-col items-center">
          {isLoading ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-100"></div>
            </div>
          ) : (
            <>
              {currentStep === 1 && <Step1 onSubmit={handleStepSubmit} />}
              {currentStep === 2 && <Step2 onSubmit={handleStepSubmit} />}
              {currentStep === 3 && <Step3 onSubmit={handleStepSubmit} />}
              {currentStep === 4 && <Step4 onSubmit={handleStepSubmit} />}
              {currentStep === 5 && <Step5 onSubmit={handleStepSubmit} />}
            </>
          )}
        </div>
      </DotBackground>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
        <img src={Logo} alt="Logo" className="w-60 " />
      </div>
    </div>
  );
};

export default Form;
