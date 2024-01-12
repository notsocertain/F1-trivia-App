import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const successToast = (message) => {
  toast.success(message, toastConfig);
};
export const errorToast = (message) => {
  toast.error(message, toastConfig);
};
export const warningToast = (message) => {
  toast.warning(message, toastConfig);
};