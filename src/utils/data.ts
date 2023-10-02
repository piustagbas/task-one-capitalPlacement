// Template for personal information data
export const personalInfoTemplate = {
  firstName: { internalUse: true, show: true }, // First Name field is for internal use and should be shown
  lastName: { internalUse: true, show: true }, // Last Name field is for internal use and should be shown
  emailId: { internalUse: true, show: true }, // Email field is for internal use and should be shown
  phoneNumber: { internalUse: false, show: false }, // Phone Number field is not for internal use and should not be shown
  nationality: { internalUse: false, show: false }, // Nationality field is not for internal use and should not be shown
  currentResidence: { internalUse: false, show: false }, // Current Residence field is not for internal use and should not be shown
  idNumber: { internalUse: false, show: false }, // ID Number field is not for internal use and should not be shown
  dateOfBirth: { internalUse: false, show: false }, // Date of Birth field is not for internal use and should not be shown
  gender: { internalUse: false, show: false }, // Gender field is not for internal use and should not be shown
  personalQuestions: [], // Array to store personal questions (empty by default)
};

// Template for profile information data
export const profileTemplate = {
  education: { mandatory: false, show: false }, // Education field is not mandatory and should not be shown
  experience: { mandatory: false, show: false }, // Experience field is not mandatory and should not be shown
  resume: { mandatory: false, show: false }, // Resume field is not mandatory and should not be shown
  profileQuestions: [], // Array to store profile questions (empty by default)
};

// Information map for personal data fields
export const InfoMap = [
  { field: 'firstName', title: 'First Name', required: true },
  { field: 'lastName', title: 'Last Name', required: true },
  { field: 'emailId', title: 'Email', required: true },
  { field: 'phoneNumber', title: 'Phone Number', required: false },
  { field: 'nationality', title: 'Nationality', required: false },
  { field: 'currentResidence', title: 'Current Residence', required: false },
  { field: 'idNumber', title: 'ID Number', required: false },
  { field: 'dateOfBirth', title: 'Date of Birth', required: false },
  { field: 'gender', title: 'Gender', required: false },
];

// Information map for profile data fields
export const ProfileMap = [
  { field: 'education', title: 'Education', required: false },
  { field: 'experience', title: 'Experience', required: false },
  { field: 'resume', title: 'Resume', required: false },
];

// Question types for form questions
export const QuesTypes = [
  { name: 'Paragraph', value: 'Paragraph' },
  { name: 'Short Answer', value: 'ShortAnswer' },
  { name: 'Yes/No', value: 'YesNo' },
  { name: 'Dropdown', value: 'Dropdown' },
  { name: 'Multiple Choice', value: 'MultipleChoice' },
  { name: 'Date', value: 'Date' },
  { name: 'Number', value: 'Number' },
  { name: 'File Upload', value: 'FileUpload' },
];
