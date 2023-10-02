// Import necessary libraries and icons.
import { useState, useRef } from 'react';
import { BiPlusMedical, BiMenu } from 'react-icons/bi';
import { IoCloseSharp, IoRemove } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import { IQuestionTemplate} from '../utils/interface';
import { QuesTypes } from '../utils/data';

// Define the AddQuestions component.
const AddQuestions = ({ setQuestion }: { setQuestion: (value: any) => void }) => {

    const choicesRef = useRef<HTMLInputElement>(null);
    const [isOpened, setIsOpened] = useState(false);
    const [question, setQues] = useState<IQuestionTemplate>({
      id: uuidv4(),
      type: 'Paragraph',
      question: '',
    });
  
    // Function to handle clicking outside the modal.
    const handleClickOutside = (event: any) => {
      if (event.target.closest('#questionModal') === null) {
        setIsOpened(false);
      }
    };



    return (
        <div className="p-8">
          <button
            type="button"
            onClick={() => setIsOpened(true)}
            className="text-black flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
          >
            <BiPlusMedical className="text-3xl" />
            <span className="text-lg">Add a question</span>
          </button>
          <div
            onClick={handleClickOutside}
            className={`fixed inset-0 flex items-center justify-center w-full h-full ${
              isOpened ? 'bg-black bg-opacity-50' : 'hidden'
            } `}
          >
            {isOpened && (
              <div
                className="rounded-2xl border border-blue-100 bg-white shadow-lg overflow-hidden md:w-[620px] mx-10 "
                role="alert"
                id="questionModal"
              >
                <div className="flex items-center justify-between gap-4 bg-[#D0F7FA] p-6">
                  <p className="font-medium sm:text-lg md:text-xl">Questions</p>
    
                  <button
                    type="button"
                    className="text-red-600 text-sm font-medium hover:opacity-80 transition"
                    onClick={() => setIsOpened(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <label htmlFor="HeadlineAct" className=" text-lg font-semibold">
                      Type
                    </label>
    
                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      onChange={(e) =>
                        setQues({ ...question, type: e.target.value as typeof question.type })
                      }
                      placeholder="Multiple Choice"
                      className="mt-1.5 w-full rounded-sm p-3 border-gray-800 text-gray-700 sm:text-sm border hover:border-gray-700"
                    >
                      {QuesTypes.map((item, index) => (
                        <option key={item.value + 'type' + index} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-lg font-semibold">Question</label>
                    <input
                      type="text"
                      placeholder="Question"
                      className="mt-1.5 w-full rounded-sm p-3 border-gray-800 text-gray-700 sm:text-sm border hover:border-gray-700"
                      onChange={(e) => setQues({ ...question, question: e.target.value })}
                    />
                  </div>
                  {question.type === 'YesNo' && (
                    <div className="flex gap-4">
                      <input
                        onChange={(e) => setQues({ ...question, disqualify: e.target.checked })}
                        id="yesNoCheck"
                        type="checkbox"
                        className="text-base scale-125 mx-1 font-medium"
                      />
                      <label htmlFor="yesNoCheck" className="text-sm text-black">
                        Disqulify candidate if the answer is no
                      </label>
                    </div>
                  )}
                  {['MultipleChoice', 'Dropdown'].includes(question.type) && (
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
                            ref={choicesRef}
                            type="text"
                            placeholder="Option"
                            className="mt-1.5 w-full rounded-sm p-3 border-gray-800 text-gray-700 sm:text-sm border hover:border-gray-700"
                          />
                          <button
                            onClick={() => {
                              if (choicesRef.current?.value) {
                                setQues({
                                  ...question,
                                  choices: question.choices
                                    ? [...question.choices, choicesRef.current.value]
                                    : [choicesRef.current.value],
                                });
                                choicesRef.current.value = '';
                              }
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
                          onChange={(e) => setQues({ ...question, other: e.target.checked })}
                          type="checkbox"
                          name=""
                          id="OtherOptions"
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
                      setQues({ id: uuidv4(), type: 'Paragraph', question: '' });
                    }}
                  >
                    <IoCloseSharp className="text-2xl" />
                    <span className="text-base font-medium">Delete Question</span>
                  </button>
                  <button
                    type="button"
                    className="bg-[#00635B] text-white text-sm font-medium hover:opacity-80 transition px-6 py-2 rounded"
                    onClick={() => {
                      setQuestion(question);
                      setQues({ id: uuidv4(), type: 'Paragraph', question: '' });
                      setIsOpened(false);
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
}

export default AddQuestions;