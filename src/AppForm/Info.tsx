// Import necessary components and interfaces.
import AddQuestions from "../Components/AddQuestions";
import DisplayQuestions from "../Components/DisplayQuestions";
import { InfoMap } from "../utils/data";
import { IApplicationFormAttributes, IQuestionTemplate } from "../utils/interface";

// Define the Info component.
export default function Info({
    personalInfo,
    setInfo,
  }: {
    personalInfo: any;
    setInfo: (value: IApplicationFormAttributes['personalInformation']) => void;
  }) {

     // Function to toggle the visibility of a personal information field
    const handleShow = (feild: string) => {
      setInfo({
        ...personalInfo,
        [feild]: {
          ...personalInfo[feild],
          show: !personalInfo[feild].show,
        },
      });
    };
  
     // Function to toggle whether a personal information field is for internal use.
    const handleInternalUse = (feild: string) => {
      setInfo({
        ...personalInfo,
        [feild]: {
          ...personalInfo[feild],
          internalUse: !personalInfo[feild].internalUse,
        },
      });
    };
  
    // Function to add a custom question to the personal information.
    const handleAddQues = (ques: IQuestionTemplate) => {
      setInfo({
        ...personalInfo,
        personalQuestions: [...personalInfo.personalQuestions, ques],
      });
    };
  
    // Function to delete a custom question from the personal information.
    const handleDeleteQues = (id: string) => {
      setInfo({
        ...personalInfo,
        personalQuestions: personalInfo.personalQuestions.filter(
          (ques: IQuestionTemplate) => ques.id !== id,
        ),
      });
    };
  
     // Function to edit a custom question within the personal information.
    const handleEditQues = (ques: IQuestionTemplate) => {
      setInfo({
        ...personalInfo,
        personalQuestions: personalInfo.personalQuestions.map((item: IQuestionTemplate) =>
          item.id === ques.id ? ques : item,
        ),
      });
    };

  // Render the personal information section.
    return (
      <div className="flex flex-col w-full text-black overflow-hidden rounded-xl shadow-md">
        <h2 className="bg-[#D0F7FA] text-lg sm:text-2xl font-semibold p-2 sm:p-8">
          Personal Information
        </h2>
        <div className="flex flex-col p-2 sm:p-8">
          {InfoMap.map((item) => (
            <div
              key={item.field + 'personalInfo'}
              className={`flex justify-between gap-2 py-6 ${
                item.field !== 'gender' && 'border-b border-[#C4C4C4]'
              }`}
            >
              <label htmlFor={item.field} className="font-semibold sm:text-xl">
                {item.title}
                {item.field === 'phoneNumber' && (
                  <span className="text-sm opacity-95 font-light hidden sm:inline-block"> (without dial code)</span>
                )}
              </label>
              {!item.required && (
                <div className="flex gap-5 items-center">
                  <div className="flex gap-1 items-center">
                    <input
                      type="checkbox"
                      className="text-base font-medium scale-125"
                      checked={personalInfo[item.field].internalUse}
                      onChange={(e) => handleInternalUse(item.field)}
                    />
                    <span className="text-sm text-black">Internal</span>
                  </div>
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
                        checked={personalInfo[item.field].show}
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
        {personalInfo?.personalQuestions && (
          <DisplayQuestions
            questions={personalInfo.personalQuestions}
            editQues={handleEditQues}
            deleteQues={handleDeleteQues}
          />
        )}
        <AddQuestions setQuestion={handleAddQues} />
      </div>
    );
  }