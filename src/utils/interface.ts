// Define an interface for an application form
export interface IApplicationForm {
  data: {
    id: string;
    type: string;
    attributes: IApplicationFormAttributes;
  };
}

// Define an interface for the attributes of an application form
export interface IApplicationFormAttributes {
  coverImage?: string; // Optional cover image URL for the form
  personalInformation: {
    firstName: IPersonalInformationTemplate;
    lastName: IPersonalInformationTemplate;
    emailId: IPersonalInformationTemplate;
    phoneNumber: IPersonalInformationTemplate;
    nationality: IPersonalInformationTemplate;
    currentResidence: IPersonalInformationTemplate;
    idNumber: IPersonalInformationTemplate;
    dateOfBirth: IPersonalInformationTemplate;
    gender: IPersonalInformationTemplate;
    personalQuestions?: IQuestionTemplate[]; // Optional array of personal questions
  };
  profile: {
    education: IProfileTemplate;
    experience: IProfileTemplate;
    resume: IProfileTemplate;
    profileQuestions?: IQuestionTemplate[]; // Optional array of profile questions
  };
  customisedQuestions?: IQuestionTemplate[]; // Optional array of custom questions
}

// Define an interface for the template of personal information fields
export interface IPersonalInformationTemplate {
  internalUse: boolean; // Indicates if the field is for internal use
  show: boolean; // Indicates if the field should be displayed
}

// Define an interface for the template of profile information fields
export interface IProfileTemplate {
  mandatory: boolean; // Indicates if the field is mandatory
  show: boolean; // Indicates if the field should be displayed
}

// Define an interface for a question template
export interface IQuestionTemplate {
  id?: string; // Unique identifier for the question (optional)
  type:
    | 'Paragraph'
    | 'ShortAnswer'
    | 'YesNo'
    | 'Dropdown'
    | 'MultipleChoice'
    | 'Date'
    | 'Number'
    | 'FileUpload'; // Type of the question
  question: string; // The text of the question
  choices?: string[]; // Array of choices (for multiple-choice and dropdown questions)
  maxChoice?: number; // Maximum number of choices allowed (optional)
  disqualify?: boolean; // Indicates if the question can disqualify applicants (optional)
  other?: boolean; // Indicates if an "Other" option is enabled (optional)
}
