import { useState } from "react";
import supabase from "../utils/supabaseClient";

const useFileUpload = (enqueueSnackbar) => {
  const [attachedFileName, setAttachedFileName] = useState("");
  const [additionalFileName, setAdditionalFileName] = useState("");

  const handleFileChange = async (file) => {
    if (!file || file.type !== "application/pdf") {
      enqueueSnackbar("Пожалуйста, загрузите PDF-файл", { variant: "error" });
      return;
    }

    const fileName = file.name;
    const isValidFileName = /^[a-zA-Z0-9-_\.]+$/.test(fileName);

    if (!isValidFileName) {
      enqueueSnackbar("Имя файла должно содержать только латинские символы", {
        variant: "error",
      });
      return;
    }
    setAttachedFileName(fileName);

    const filePath = `public/uploads/${fileName}`;
    const { data, error } = await supabase.storage
      .from("presentation")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return;
    }

    getFilePath(filePath);
  };

  async function getFilePath(filePath) {
    const { data, urlError } = supabase.storage
      .from("presentation")
      .getPublicUrl(filePath);

    if (urlError) {
      throw urlError;
    }

    setAttachedFileName(data.publicUrl);
  }

  const handleAdditionalFileChange = async (file) => {
    if (!file || file.type !== "application/pdf") {
      enqueueSnackbar("Пожалуйста, загрузите PDF-файл", { variant: "error" });
      return;
    }

    const fileName = file.name;
    const isValidFileName = /^[a-zA-Z0-9-_\.]+$/.test(fileName);

    if (!isValidFileName) {
      enqueueSnackbar("Имя файла должно содержать только латинские символы", {
        variant: "error",
      });
      return;
    }
    setAdditionalFileName(fileName);

    const filePath = `public/uploads/${fileName}`;
    const { data, error } = await supabase.storage
      .from("presentation")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return;
    }

    getAdditionalFilePath(filePath);
  };

  async function getAdditionalFilePath(filePath) {
    const { data, urlError } = supabase.storage
      .from("presentation")
      .getPublicUrl(filePath);

    if (urlError) {
      throw urlError;
    }

    setAdditionalFileName(data.publicUrl);
  }

  return {
    attachedFileName,
    additionalFileName,
    handleFileChange,
    handleAdditionalFileChange,
  };
};

export default useFileUpload;
