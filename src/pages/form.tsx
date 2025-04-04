/* eslint-disable react-hooks/exhaustive-deps */
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
  wordsStep6,
  wordsStep7,
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
import Datazon from "../assets/datazonlogo.svg";
import { FormDatazon } from "../models/forms.model";

type FormValuesStep1 = {
  name: string;
};

type FormValuesStep2 = {
  email: string;
};

type FormValuesStep3 = {
  university: string;
};

type FormValuesStep4 = {
  career: string;
};

type FormValuesStep5 = {
  meetus: string;
};

type FormValuesStep6 = {
  transport: number;
};

type FormValuesStep7 = {
  kilometers: number;
};

const Step1 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep1> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep1>();

  return (
    <div className="relative">
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
            <p className="text-sm font-nunito-regular">
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
                value:
                  /^\w+(\.\w+)*@[a-zA-Z_]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/,
                // value: /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,
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

const Step3 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep4> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep4>();

  return (
    <div className="relative">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep7} />
        <div className="flex flex-col w-full">
          <input
            className="m-4 bg-black text-white text-4xl p-2 rounded border border-gray-300 w-full"
            {...register("career", {
              required: true,
              validate: (value) =>
                value.trim().length > 0 || "El campo no puede estar vacío",
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ.\s]+$/,
                message: "Solo se permiten letras y espacios",
              },
            })}
          />
          <label className="text-white text-left pl-5">
            <p className="text-sm font-nunito-regular">
              *Ej: Ing. en Sistemas ó rol en tu empresa
            </p>
          </label>
          <label className="text-white text-left pl-5">
            {errors.career && (
              <span className="text-red-500">{errors.career.message}</span>
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

const Step4 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep3> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep3>();

  return (
    <div className="relative">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep3} />
        <div className="flex flex-col  w-full items-center justify-center">
          <input
            className="m-4 bg-black text-white text-4xl p-2 rounded border border-gray-300 w-full"
            {...register("university", {
              required: true,
              validate: (value) =>
                value.trim().length > 0 || "El campo no puede estar vacío",
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras y espacios",
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

const Step5 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep5> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep5>();

  return (
    <div className="relative">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep4} />
        <div className="flex  w-full items-center justify-center">
          <select
            className="m-4 w-full bg-black text-white text-2xl p-4 rounded border border-gray-300"
            {...register("meetus", { required: "Seleccione una opción" })}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Seleccione
            </option>
            <option className="p-4" value="redes">
              En redes sociales
            </option>
            <option className="p-4" value="facultad">
              En la Facultad
            </option>
            <option className="p-4" value="amigo">
              Me invitó un amigo/a
            </option>
            <option className="p-4" value="linkedin">
              Linkedin
            </option>
            <option className="p-4" value="recomendacion">
              Recomendación
            </option>
            <option className="p-4" value="otro">
              Otro
            </option>
          </select>
          <label className="text-white text-left pl-5">
            {errors.meetus && (
              <span className="text-red-500">{errors.meetus.message}</span>
            )}
          </label>
          <div className="pointer-events-none absolute right-12 top-1/2 transform -translate-y-1/2 text-white">
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

const Step6 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep6> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep6>();

  return (
    <div className="relative">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep5} />
        <div className="flex w-full items-center justify-center relative">
          <select
            className="m-4 w-full bg-black text-white text-2xl p-4 rounded border border-gray-300 appearance-none"
            {...register("transport", { required: "Seleccione una opción" })}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Seleccione
            </option>
            <option className="p-4" value="pie">
              🚶 A pie
            </option>
            <option className="p-4" value="bicicleta">
              🚴 Bicicleta
            </option>
            <option className="p-4" value="scooter">
              🛴 Scooter
            </option>
            <option className="p-4" value="transporte_publico">
              🚌 Transporte público
            </option>
            <option className="p-4" value="auto_particular">
              🚗 Auto particular
            </option>
            <option className="p-4" value="auto_compartido">
              🚙 Auto compartido
            </option>
            <option className="p-4" value="taxi_transporte_app">
              🚕 Taxi o transporte por app
            </option>
            <option className="p-4" value="avion">
              ✈️ Avión
            </option>
          </select>
          <div className="pointer-events-none absolute right-12 top-1/2 transform -translate-y-1/2 text-white">
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
          <label className="text-white text-left pl-5">
            {errors.transport && (
              <span className="text-red-500">{errors.transport.message}</span>
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

const Step7 = ({ onSubmit }: { onSubmit: SubmitHandler<FormValuesStep7> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesStep7>();

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TypewriterEffect words={wordsStep6} />
        <div className="flex flex-col  w-full items-center justify-center">
          <input
            type="number"
            className="m-4 bg-black text-white text-4xl p-2 rounded border border-gray-300 w-full"
            {...register("kilometers", {
              required: "Este campo es obligatorio",
              validate: (value) => value > 1 || "El valor debe ser mayor a 1",
            })}
          />
          {/* <label className="text-white text-left pl-5">
            <p className="text-sm  font-nunito-regular">
              *Ej: 10km, 20km, 30km
            </p>
          </label> */}
          <label className="text-white text-left pl-5">
            {errors.kilometers && (
              <span className="text-red-500">{errors.kilometers.message}</span>
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
      console.log(localEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, formData.email);
  }, [formData.email]);

  const handleStepSubmit = (data: Record<string, any>) => {
    setFormData({ ...formData, ...data });

    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalData = { ...formData, ...data };
      setLocalEmail(finalData.email);
      handleSubmit(finalData);
      //console.log(localEmail);
    }
  };

  const handleSubmit: SubmitHandler<Record<string, any>> = async (data) => {
    setIsLoading(true);

    const DataForm: FormDatazon = {
      name: data.name,
      email: data.email.toLowerCase(),
      university: data.university,
      career: data.career,
      meetus: data.meetus,
      transport: data.transport,
      kilometers: parseInt(data.kilometers) || 0,
    };

    try {
      await sendForm(DataForm);
      setIsLoading(false);
      navigate("/thanks");
      toast.success("Formulario enviado con éxito");
    } catch (err: any) {
      setIsLoading(false);
      toast.error("Error al enviar el formulario - intente nuevamente");
      console.error(err.response.error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-between items-center relative">
      <img
        src={Datazon}
        alt="logo"
        width={250}
        className="absolute z-10 top-20"
      />
      <DotBackground>
        <div className="flex w-80 sm:w-full md:w-80 lg:w-1/2 flex-col items-center">
          {isLoading ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
              <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-100"></div>
            </div>
          ) : (
            <>
              {currentStep === 1 && <Step1 onSubmit={handleStepSubmit} />}
              {currentStep === 2 && <Step2 onSubmit={handleStepSubmit} />}
              {currentStep === 3 && <Step3 onSubmit={handleStepSubmit} />}
              {currentStep === 4 && <Step4 onSubmit={handleStepSubmit} />}
              {currentStep === 5 && <Step5 onSubmit={handleStepSubmit} />}
              {currentStep === 6 && <Step6 onSubmit={handleStepSubmit} />}
              {currentStep === 7 && <Step7 onSubmit={handleStepSubmit} />}
            </>
          )}
        </div>
      </DotBackground>

      <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center">
        <a href="https://piconsulting.com.ar/">
          <img src={Logo} alt="Logo" className="w-60 " />
        </a>
      </div>
      <ToastContainer
        className="z-[9999]"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Form;
