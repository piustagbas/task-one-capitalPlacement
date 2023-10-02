// Import necessary libraries and icons.
import { useState, useRef } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { IoRemove, IoCloseSharp } from 'react-icons/io5';
import { BiMenu, BiPlusMedical } from 'react-icons/bi';
import { IQuestionTemplate } from '../utils/interface';

// Define the DisplayQuestions component.
function DisplayQuestions({
  questions,
  editQues,
  deleteQues,
}: {
  questions: [IQuestionTemplate];
  editQues: (value: IQuestionTemplate) => void;
  deleteQues: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 w-full px-6 pb-12 pt-0">
      {questions.map((ques) => (
        <Question ques={ques} editQues={editQues} deleteQues={deleteQues} />
      ))}
    </div>
  );
}

// Define the Question component.
const Question = ({
  ques,
  editQues,
  deleteQues,
}: {
  ques: IQuestionTemplate;
  editQues: (value: IQuestionTemplate) => void;
  deleteQues: (id: string) => void;
}) => {
  // Create a reference to an input element for choices.
  const choicesRef = useRef<HTMLInputElement>(null);

  // State variables.
  const [isOpened, setIsOpened] = useState(false);
  const [question, setQues] = useState<IQuestionTemplate>({ ...ques });
    
      return (
        <div className="flex flex-col w-full px-2 py-5 ">
          <span className="text-sm text-gray-500">{question.type}</span>
          <div className="flex justify-between items-center gap-4 pb-14 border-b font-semibold text-xl">
            <p>{ques.question}</p>
            <button onClick={() => setIsOpened(!isOpened)}>
              <FiEdit2 />
            </button>
          </div>
    
          {isOpened && (
            <div className="w-full " role="alert" id="questionModal">
              <div className="p-6 flex flex-col gap-3">
                <div>
                  <label className="text-lg font-semibold">Question</label>
                  <input
                    type="text"
                    placeholder="Question"
                    className="mt-1.5 w-full rounded-sm p-3 border-gray-800 text-gray-700 sm:text-sm border hover:border-gray-700"
                    value={question.question}
                    onChange={(e) => {
                      setQues({ ...question, question: e.target.value });
                    }}
                  />
                </div>
                {ques.type === 'YesNo' && (
                  <div className="flex gap-4">
                    <input
                      id="yesNoCheck"
                      type="checkbox"
                      className="text-base scale-125 mx-1 font-medium"
                      checked={question.disqualify}
                      onChange={(e) => {
                        setQues({ ...question, disqualify: e.target.checked });
                      }}
                    />
                    <label htmlFor="yesNoCheck" className="text-sm text-black">
                      Disqulify candidate if the answer is no
                    </label>
                  </div>
                )}
                {['MultipleChoice', 'Dropdown'].includes(ques.type) && (
                  <div className="flex flex-col gap-3">
                    <label className="text-lg font-semibold">Options</label>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2">
                        {question.choices &&
                          question.choices.map((item, index) => (
                            <div key={item + 'option'} className="flex items-center gap-3">
                              <p className="flex-1">{item}</p>
                              <button
                                type="button"
                                className="text-red-600 text-sm font-medium hover:opacity-80 transition"
                                onClick={() => {
                                  let temp: any = question.choices;
                                  temp.splice(index, 1);
                                  setQues({ ...question, choices: temp });
                                }}
                              >
                                <IoRemove className=" border border-gray-700 rounded-full text-2xl" />
                              </button>
                            </div>
                          ))}
                      </div>
    
                      <div className="flex items-center gap-3">
                        <BiMenu className="text-3xl" />
                        <input
                          type="text"
                          placeholder="Option"
                          className="mt-1.5 w-full rounded-sm p-3 border-gray-800 text-gray-700 sm:text-sm border hover:border-gray-700"
                          ref={choicesRef}
                        />
                        <button
                          onClick={() => {
                            let temp: any = question.choices ? question.choices : [];
                            temp.push(choicesRef.current?.value);
                            setQues({ ...question, choices: temp });
                          }}
                          type="button"
                          className=""
                        >
                          <BiPlusMedical className="text-xl" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 py-3">
                      <input
                        type="checkbox"
                        name=""
                        id="OtherOptions"
                        checked={question.other}
                        onChange={(e) => {
                          setQues({ ...question, other: e.target.checked });
                        }}
                      />
                      <label htmlFor="OtherOptions" className="text-sm text-black">
                        Enable "Other" option
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center p-6">
                <button
                  type="button"
                  className="text-red-600 text-sm font-medium hover:opacity-80 transition flex items-center gap-1"
                  onClick={() => {
                    setIsOpened(false);
                    deleteQues(ques.id as string);
                  }}
                >
                  <IoCloseSharp className="text-2xl" />
                  <span className="text-base font-medium">Delete Question</span>
                </button>
                <button
                  type="button"
                  className="bg-[#00635B] text-white text-sm font-medium hover:opacity-80 transition px-6 py-2 rounded"
                  onClick={() => {
                    setIsOpened(false);
                    editQues(question);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      );
    }

export default DisplayQuestions;