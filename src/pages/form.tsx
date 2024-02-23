/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { wordsStep1, wordsStep2, wordsStep3, wordsStep4 } from "../utils/texts";
import { DotBackground } from "../components/ui/dotBackground";
import { useNavigate } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FormValuesStep1 = {
  nombreCompleto: string;
};

type FormValuesStep2 = {
  correoElectronico: string;
};

type FormValuesStep3 = {
  formacion: string;
};
type FormValuesStep4 = {
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
            {...register("nombreCompleto", { required: true })}
          />
          <label className="text-white text-left pl-5">
            <p>
              <small>*Campo excluyente</small>
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
            {...register("correoElectronico", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Ingrese un correo electrónico válido",
              },
            })}
          />
          <label className="text-white text-left pl-5">
            {errors.correoElectronico && (
              <span className="text-red-500">
                {errors.correoElectronico.message}
              </span>
            )}

            <p>
              <small>*Campo excluyente</small>
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

const Step3 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep3> }) => {
  const { register, handleSubmit } = useForm<FormValuesStep3>();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep3} />
        <div className="flex flex-col w-full">
          <input
            className="m-4 bg-black text-white text-4xl p-2 rounded border border-gray-300 w-full"
            {...register("formacion", { required: true })}
          />
          <label className="text-white text-left pl-5">
            <p>
              <small>* Ej: Ingeniería en Sistemas campo excluyente</small>
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

const Step4 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep4> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep4>();

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep4} />
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

            <p>
              <small>* Opcional</small>
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
    if (currentStep < 4) {
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
    <div className="bg-black min-h-screen flex justify-center items-center">
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
            </>
          )}
        </div>
      </DotBackground>
    </div>
  );
};

export default Form;
