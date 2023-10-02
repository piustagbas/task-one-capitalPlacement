// Import necessary components and interfaces.
import AddQuestions from "../Components/AddQuestions";
import DisplayQuestions from "../Components/DisplayQuestions";
import { IApplicationFormAttributes, IQuestionTemplate } from "../utils/interface";

// Define the ExtraQues component.
export default function ExtraQues({
  customisedQuestions,
  setCustomQuestions,
}: {
  customisedQuestions: any;
  setCustomQuestions: (value: IApplicationFormAttributes['customisedQuestions']) => void;
}) {
  // Function to handle adding a question to the list of customised questions.
  const handleAddQues = (ques: IQuestionTemplate) => {
    setCustomQuestions([...customisedQuestions, ques]);
  };

  // Function to handle deleting a question from the list of customised questions.
  const handleDeleteQues = (id: string) => {
    setCustomQuestions(customisedQuestions.filter((ques: IQuestionTemplate) => ques.id !== id));
  };

  // Function to handle editing a question in the list of customised questions.
  const handleEditQues = (ques: IQuestionTemplate) => {
    setCustomQuestions(
      customisedQuestions.map((item: IQuestionTemplate) => (item.id === ques.id ? ques : item)),
    );
  };

  // Render the additional questions section.
  return (
    <div className="flex flex-col w-full text-black overflow-hidden rounded-xl shadow-md">
      {/* Display a heading for the additional questions section. */}
      <h2 className="bg-[#D0F7FA] text-2xl font-semibold p-2 sm:p-8">Additional Questions</h2>
      <div className="flex flex-col p-2 sm:p-8"></div>
      {/* Display the list of customised questions using the DisplayQuestions component. */}
      {customisedQuestions && (
        <DisplayQuestions
          questions={customisedQuestions}
          editQues={handleEditQues}
          deleteQues={handleDeleteQues}
        />
      )}
      {/* Render the AddQuestions component to allow users to add new questions. */}
      <AddQuestions setQuestion={handleAddQues} />
    </div>
  );
}
