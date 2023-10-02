// Import necessary components and interfaces.
import AddQuestions from "../Components/AddQuestions";
import DisplayQuestions from "../Components/DisplayQuestions";
import { ProfileMap } from "../utils/data";
import { IApplicationFormAttributes, IQuestionTemplate } from "../utils/interface";

// Define the Profile component.
export default function Profile({
  profileInfo,
  setInfo,
}: {
  profileInfo: any;
  setInfo: (value: IApplicationFormAttributes['profile']) => void;
}) {
  // Function to toggle the visibility of a profile information field.
  const handleShow = (field: string) => {
    setInfo({
      ...profileInfo,
      [field]: {
        ...profileInfo[field],
        show: !profileInfo[field].show,
      },
    });
  };

  // Function to toggle whether a profile information field is mandatory.
  const handleMandatory = (field: string) => {
    setInfo({
      ...profileInfo,
      [field]: {
        ...profileInfo[field],
        mandatory: !profileInfo[field].mandatory,
      },
    });
  };

  // Function to add a custom question to the profile information.
  const handleAddQues = (ques: IQuestionTemplate) => {
    setInfo({
      ...profileInfo,
      profileQuestions: [...profileInfo.profileQuestions, ques],
    });
  };

  // Function to delete a custom question from the profile information.
  const handleDeleteQues = (id: string) => {
    setInfo({
      ...profileInfo,
      profileQuestions: profileInfo.profileQuestions.filter(
        (ques: IQuestionTemplate) => ques.id !== id,
      ),
    });
  };

  // Function to edit a custom question within the profile information.
  const handleEditQues = (ques: IQuestionTemplate) => {
    setInfo({
      ...profileInfo,
      profileQuestions: profileInfo.profileQuestions.map((item: IQuestionTemplate) =>
        item.id === ques.id ? ques : item,
      ),
    });
  };

  // Render the profile information section.
  return (
    <div className="flex flex-col w-full text-black overflow-hidden rounded-xl shadow-md">
      {/* Display a heading for the profile information section. */}
      <h2 className="bg-[#D0F7FA] text-lg sm:text-2xl font-semibold p-2 sm:p-8">Profile</h2>
      <div className="flex flex-col p-2 sm:p-8">
        {ProfileMap.map((item) => (
          <div
            key={item.field + 'profileInfo'}
            className={`flex justify-between gap-2 py-6 ${
              item.field !== 'resume' && 'border-b border-[#C4C4C4]'
            }`}
          >
            <label htmlFor={item.field} className="font-semibold sm:text-xl">
              {item.title}
            </label>
            {!item.required && (
              <div className="flex gap-5 items-center">
                {/* Checkbox to mark the field as mandatory. */}
                <div className="flex gap-1 items-center">
                <input
                      type="checkbox"
                      className="text-base font-medium scale-125"
                      checked={profileInfo[item.field].mandatory}
                      onChange={(e) => handleMandatory(item.field)}
                    />
                  <span className="text-sm text-black">Mandatory</span>
                </div>
                {/* Checkbox to toggle field visibility. */}
                <div className="flex gap-1 items-center">
                  <label
                     htmlFor={'acceptConditionsFor' + item.field}
                    className="relative h-8 w-14 scale-[0.6] cursor-pointer"
                    dir="rtl"
                  >
                       <input
                        type="checkbox"
                        id={'acceptConditionsFor' + item.field}
                        className="peer sr-only"
                        checked={profileInfo[item.field].show}
                        onChange={(e) => handleShow(item.field)}
                      />
                    <span className="absolute inset-0 rounded-full border border-gray-400 bg-white transition peer-checked:bg-green-500"></span>

                    <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full border border-gray-400 bg-gray-200 peer-checked:bg-white transition-all peer-checked:start-6"></span>
                  </label>
                  <span className="text-sm text-gray-500">Hide</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Display custom questions related to the profile information. */}
      {profileInfo?.profileQuestions && (
        <DisplayQuestions
          questions={profileInfo.profileQuestions}
          editQues={handleEditQues}
          deleteQues={handleDeleteQues}
        />
      )}
      {/* Render the AddQuestions component to allow users to add new questions. */}
      <AddQuestions setQuestion={handleAddQues} />
    </div>
  );
}
