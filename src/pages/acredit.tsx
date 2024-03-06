/* eslint-disable @typescript-eslint/no-explicit-any */
import { DotBackground } from "../components/ui/dotBackground";
import { useForm, SubmitHandler } from "react-hook-form";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import acreditForm from "../api/acreditForm";

type FormValues = {
  email: string;
};

const Acredit = () => {
  const [localEmail, setLocalEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const localStorageKey = "userEmail";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    const storedEmail = localStorage.getItem(localStorageKey);
    if (storedEmail) {
      setLocalEmail(storedEmail);
    }
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(localEmail);
    setIsLoading(true);
    try {
      await acreditForm(data);
      navigate("/welcome");
    } catch (err: any) {
      console.error(err.response.data.error);
      toast.error(err.response.data.error.toString());
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between items-center ">
      <DotBackground>
        <div className="flex w-80 sm:w-full md:w-80 lg:w-1/2 flex-col items-center">
          {isLoading ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-100"></div>
            </div>
          ) : (
            <form
              className="flex flex-col justify-center items-center w-80 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col w-full ">
                <input
                  className="m-4  bg-black text-white text-lg p-2 rounded border border-gray-300 border-opacity-35"
                  {...register("email", { required: true })}
                  defaultValue={localEmail}
                />
                <label className="text-white text-left pl-5">
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                  <p className="text-sm  font-nunito-regular">
                    *Ingresa el mail con el que te registraste
                  </p>
                </label>
              </div>
              <div className="flex w-full justify-end items-end">
                <button
                  className="text-white mt-3 pr-5 text-right"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
                </button>
              </div>
            </form>
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
    </div>
  );
};

export default Acredit;
