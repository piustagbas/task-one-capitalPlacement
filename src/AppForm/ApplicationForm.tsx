// Import necessary modules and components.
import { useState } from "react";
import Breadcrumb from './Breadcrumb';
import Info from "./Info";
import Profile from './Profile';
import ExtraQues from './ExtraQues';
import AddImage from "../Components/AddImage";
import { IApplicationForm } from "../utils/interface";
import { personalInfoTemplate, profileTemplate } from "../utils/data";
import { v4 as uuidv4 } from 'uuid';

// Define the ApplicationForm component.
export default function ApplicationForm() {
  // Initialize the state for application form data using the useState hook.
  const [application, setApplication] = useState<IApplicationForm>({
    data: {
      id: uuidv4(),
      attributes: {
        coverImage: '',
        personalInformation: personalInfoTemplate as IApplicationForm['data']['attributes']['personalInformation'],
        profile: profileTemplate as IApplicationForm['data']['attributes']['profile'],
        customisedQuestions: [] as IApplicationForm['data']['attributes']['customisedQuestions'],
      },
    },
  } as IApplicationForm);

  // Define functions to update specific parts of the application data state.

  // Function to handle image upload.
  const handleImageUpload = (image: string) => {
    setApplication((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        attributes: {
          ...prevState.data.attributes,
          coverImage: image,
        },
      },
    }));
  };

  // Function to handle personal information input.
  const handlePesonalInfo = (
    info: IApplicationForm['data']['attributes']['personalInformation'],
  ) => {
    setApplication((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        attributes: {
          ...prevState.data.attributes,
          personalInformation: info,
        },
      },
    }));
  };

  // Function to handle profile information input.
  const handleProfileInfo = (
    info: IApplicationForm['data']['attributes']['profile'],
  ) => {
    setApplication((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        attributes: {
          ...prevState.data.attributes,
          profile: info,
        },
      },
    }));
  };

  // Function to handle custom questions input.
  const handleCustomisedQues = (
    customQues: IApplicationForm['data']['attributes']['customisedQuestions'],
  ) => {
    setApplication((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        attributes: {
          ...prevState.data.attributes,
          customisedQuestions: customQues,
        },
      },
    }));
  };

  // Render the main application form section with various components.
  return (
    <main className="flex-1 relative py-8 md:py-10 z-0 overflow-y-auto">
      <Breadcrumb process="Application Form" />
      <section className="flex flex-col gap-16 p-5 md:mx-10 items-center md:max-w-2xl">
        {/* Render the AddImage component to handle cover image upload. */}
        <AddImage
          image={application?.data?.attributes?.coverImage}
          setImage={handleImageUpload}
        />
        {/* Render the Info component to handle personal information. */}
        <Info
          personalInfo={application?.data?.attributes?.personalInformation}
          setInfo={handlePesonalInfo}
        />
        {/* Render the Profile component to handle profile information. */}
        <Profile
          profileInfo={application?.data?.attributes?.profile}
          setInfo={handleProfileInfo}
        />
        {/* Render the ExtraQues component to handle custom questions. */}
        <ExtraQues
          customisedQuestions={application?.data?.attributes?.customisedQuestions}
          setCustomQuestions={handleCustomisedQues}
        />
      </section>
    </main>
  );
}
