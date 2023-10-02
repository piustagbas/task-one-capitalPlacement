// Import the AiOutlineCaretRight icon from the 'react-icons/ai' library.
import { AiOutlineCaretRight } from 'react-icons/ai';

// Define the Breadcrumb component.
export default function Breadcrumb({
  process,
}: {
  process: 'Program Details' | 'Application Form' | 'Work Flow' | 'Preview';
}) {
  // Define an array of possible workflow steps.
  const WorkFlowData: Array<string> = [
    'Program Details',
    'Application Form',
    'Work Flow',
    'Preview',
  ];

  // Render the breadcrumb navigation.
  return (
    <nav className="flex w-full py-2 sm:py-10" aria-label="Breadcrumb">
      <ol className="flex justify-around w-full shadow-u-d font-medium text-sm sm:text-xl">
        {WorkFlowData.map((item: string) => (
          <li
            key={item + 'breadcrumb'}
            className={`flex flex-1 relative items-center justify-center py-4 sm:py-12 ${
              item === process ? 'text-white bg-[#00635B]' : 'text-black'
            } `}
          >
            <div className="flex items-center">
              <h2 className="line-clamp-1">{item}</h2>
            </div>
            {item !== process ? (
              <span className="absolute right-0 w-[1px] h-8 sm:h-20 bg-gray-500/50 "></span>
            ) : (
              // Display a right arrow icon if the current step matches the active process.
              <AiOutlineCaretRight className="text-6xl absolute right-0 text-[#00635B] translate-x-2/3" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
