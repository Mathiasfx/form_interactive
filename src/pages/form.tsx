/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sendForm from "../api/sendForm";
import Logo from "../assets/logopi.svg";
import "../css/toggle.css";

type FormValuesStep1 = {
  nombre: string;
};

type FormValuesStep2 = {
  email: string;
};

type FormValuesStep3 = {
  utn: string;
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

  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep3} />
        <div className="flex  w-full items-center justify-center">
          <select
            className="m-4 w-full bg-black text-white text-2xl p-4 rounded border border-gray-300"
            {...register("utn")}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Seleccione
            </option>
            <option className="p-4" value="estudiante">
              Estudiante
            </option>
            <option className="p-4" value="egresado">
              Egresado
            </option>
          </select>
          <div className="pointer-events-none flex items-center px-2 text-white">
            <svg
              className="fill-current h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7l-5 5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <label className="text-white text-left pl-5">
          <p className="text-sm  font-nunito-regular">
            * Si no sos de la UTN, no es necesario que contestes
          </p>
        </label>

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
              *Ej: Ing. en Sistemas ó rol en tu empresa
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

  const [localEmail, setLocalEmail] = useState<string>("");
  const localStorageKey = "userEmail";

  useEffect(() => {
    const storedEmail = localStorage.getItem(localStorageKey);
    if (storedEmail) {
      setLocalEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, formData.email);
  }, [formData.email]);

  const handleStepSubmit = (data: Record<string, any>) => {
    setFormData({ ...formData, ...data });

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      setLocalEmail(formData.email);
      handleSubmit(formData, data.linkedin);
    }
  };

  const handleSubmit: SubmitHandler<Record<string, any>> = async (
    data,
    linkedin
  ) => {
    setIsLoading(true);

    const DataForm = {
      email: data.email,
      fullname: data.nombre,
      linkedin: linkedin,
      position: data.posicion,
      student: data.utn ? data.utn : "No corresponde",
    };

    try {
      await sendForm(DataForm);
      navigate("/thanks");
    } catch (err: any) {
      console.error(err.response.data.error);
      toast.error(err.response.data.error.toString());
    } finally {
      setIsLoading(false);
    }
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
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </DotBackground>

      <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center">
        <img src={Logo} alt="Logo" className="w-60 " />
      </div>
    </div>
  );
};

export default Form;
