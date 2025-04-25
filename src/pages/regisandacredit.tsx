/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Datazon from "../assets/datazonlogo.svg";
import { DotBackground } from "../components/ui/dotBackground";
import { toast, ToastContainer } from "react-toastify";
import { FormRegisterAndAcredit } from "../models/forms.model";
import sendFormAndAcredit from "../api/sendFormAndAcredit";
import Logo from "../assets/logopi.svg";
import { wordsStep1, wordsStep2, wordsStep3 } from "../utils/texts";
type FormValuesStep1 = {
  name: string;
};
type FormValuesStep2 = {
  email: string;
};
type FormValuesStep3 = {
  university: string;
};

const Step1 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep1> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep1>();

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep1} />
        <div className="flex flex-col w-full ">
          <input
            className="m-4  bg-black text-white text-lg p-2 rounded border border-gray-300 border-opacity-35"
            {...register("name", {
              required: "El nombre no puede estar vacío",
              minLength: {
                value: 1,
                message: "El nombre debe tener al menos 1 carácter",
              },
              maxLength: {
                value: 50,
                message: "El nombre no puede tener más de 50 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*\s*$/,
                message: "Solo se permiten letras y espacios",
              },
              validate: (value) =>
                value.trim().length > 0 || "El nombre no puede estar vacío",
            })}
          />
          <label className="text-white text-left pl-5">
            <p className="text-sm  font-nunito-regular">
              *Lo necesitamos para inscribirte al evento
            </p>
          </label>
          <label className="text-white text-left pl-5">
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </label>
        </div>
        <div className="flex w-full justify-end items-end">
          <button
            className="text-white mt-3 pr-5 text-right"
            type="submit"
            title="Next"
          >
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
    <div className="relative">
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep2} />
        <div className="flex flex-col w-full ">
          <input
            className="m-4  bg-black text-white text-lg p-2 rounded border border-gray-300 border-opacity-35"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Formato de correo inválido",
              },
            })}
          />
        </div>
        <div className="flex w-full justify-end items-end">
          <button
            className="text-white mt-3 pr-5 text-right"
            type="submit"
            title="Next"
          >
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </button>
        </div>
      </form>
      <label className="text-white text-left pl-5">
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
    </div>
  );
};

const Step3 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep3> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep3>();

  return (
    <div className="relative">
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep3} />
        <div className="flex flex-col w-full ">
          <input
            className="m-4  bg-black text-white text-lg p-2 rounded border border-gray-300 border-opacity-35"
            {...register("university", {
              required: true,
              validate: (value) =>
                value.trim().length > 0 || "El campo no puede estar vacío",
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]+$/,
                message: "Solo se permiten letras, números y espacios",
              },
            })}
          />
          <label className="text-white text-left pl-5">
            {errors.university && (
              <span className="text-red-500">{errors.university.message}</span>
            )}
          </label>
        </div>
        <div className="flex w-full justify-end items-end">
          <button
            className="text-white mt-3 pr-5 text-right"
            type="submit"
            title="Next"
          >
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </button>
        </div>
      </form>
    </div>
  );
};

const RegisAndAcredit = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleStepSubmit = (data: Record<string, any>) => {
    setFormData({ ...formData, ...data });

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalData = { ...formData, ...data };

      handleSubmit(finalData);
    }
  };

  const handleSubmit: SubmitHandler<Record<string, any>> = async (data) => {
    setIsLoading(true);

    const DataForm: FormRegisterAndAcredit = {
      name: data.name,
      email: data.email.toLowerCase(),
      university: data.university,
    };

    try {
      await sendFormAndAcredit(DataForm);
      navigate("/thanks");
    } catch (err: any) {
      console.error(err);
      const errorMessage = err.response?.data?.detail || "Error desconocido";
      if (errorMessage.includes("The user is already registered")) {
        toast.error("El usuario ya estás registrado");
      } else if (errorMessage.includes("Invalid email")) {
        toast.error("El correo electrónico no es válido");
      } else if (errorMessage.includes("Invalid data")) {
        toast.error("Los datos son inválidos");
      } else {
        toast.error(`Error al enviar el formulario: ${errorMessage}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between items-center relative">
      <img
        src={Datazon}
        alt="logo"
        width={230}
        className="absolute z-10 top-20"
      />
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

      <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center z-20">
        <a href="https://piconsulting.com.ar/">
          <img src={Logo} alt="Logo" className="w-60 " />
        </a>
      </div>
    </div>
  );
};

export default RegisAndAcredit;
