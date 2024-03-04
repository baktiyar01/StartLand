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

    const fileName = file.name; // Save the file name before uploading
    setAttachedFileName(fileName);

    const filePath = `public/uploads/${fileName}`;
    const { data, error } = await supabase.storage
      .from("presentation")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return;
    }

    // Update the file name with the public URL
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
      enqueueSnackbar("Please upload a PDF file", { variant: "error" });
      return;
    }

    const fileName = file.name; // Save the file name before uploading
    setAdditionalFileName(fileName);

    const filePath = `public/uploads/${fileName}`;
    const { data, error } = await supabase.storage
      .from("presentation")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return;
    }

    // Update the file name with the public URL
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
