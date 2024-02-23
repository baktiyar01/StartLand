import { useState } from "react";
import supabase from "../utils/supabaseClient";

const useFileUpload = (enqueueSnackbar) => {
  const [attachedFileName, setAttachedFileName] = useState("");
  const [additionalFileName, setAdditionalFileName] = useState("");

  const handleFileChange = async (file) => {
    if (!file || file.type !== "application/pdf") {
      enqueueSnackbar("Please upload a PDF file", { variant: "error" });
      return;
    }

    setAttachedFileName(file.name);
    const filePath = `public/uploads/${file.name}`;
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
    // console.log("got public url", data);
    setAttachedFileName(data.publicUrl);
  }

  const handleAdditionalFileChange = async (file) => {
    if (!file || file.type !== "application/pdf") {
      enqueueSnackbar("Please upload a PDF file", { variant: "error" });
      return;
    }

    setAdditionalFileName(file.name);
    const filePath = `public/uploads/${file.name}`;
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
    // console.log("got public url", data);
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
