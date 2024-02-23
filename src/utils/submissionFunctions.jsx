import supabase from "./supabaseClient";

const submission = async (
  formData,
  attachedFileName,
  additionalFileName,
  enqueueSnackbar,
  setFormData,
  prevStep
) => {
  try {
    const { data, error } = await supabase.from("submissions").insert([
      {
        fullName: formData.fullName,
        phoneNumber: formData.phone,
        email: formData.email,
        projectName: formData.projectName,
        industry_id: formData.industry,
        solution: formData.solution,
        salesSphere_id: formData.salesSphere,
        techology_id: formData.technologies,
        description: formData.description,
        projectUniqueness: formData.projectUniqueness,
        experiense_id: formData.startupExperience,
        research_id: formData.researches,
        presentation_id: formData.presentation,
        attachedPresentation: attachedFileName,
        additionalpresentation: additionalFileName,
      },
    ]);

    if (error) {
      throw error;
    }

    enqueueSnackbar("Form submitted successfully", { variant: "success" });
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      projectName: "",
      industry_id: "",
      solution: "",
      salesSphere_id: "",
      techology_id: "",
      description: "",
      projectUniqueness: "",
      experiense_id: "",
      research_id: "",
      presentation_id: "",
      attachedPresentation: "",
      additionalpresentation: "",
    });
    prevStep();
    prevStep();
  } catch (error) {
    enqueueSnackbar("Error submitting form", { variant: "error" });
    console.error("Error submitting form:", error.message);
  }
};

export default submission;
