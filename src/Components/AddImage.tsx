// Import necessary icons.
import { PiUploadSimple } from 'react-icons/pi';
import { IoCloseSharp } from 'react-icons/io5';

// Define the AddImage component.
const AddImage = ({
  image,
  setImage,
}: {
  image: string | undefined;
  setImage: (image: string) => void;
}) => {
  // Function to handle image upload.
  const ChangImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: any = e.target.files;
    if (files.length) {
      console.log(files);
      const reader = new FileReader();
      reader.onload = (e) => {
        // Check the size of the image.
        if (files[0].size > 1000000) {
          alert('Image size should be less than 1mb');
          return;
        }
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full text-black overflow-hidden rounded-xl shadow-md">
      {!image ? (
        // Displayed when no image is selected.
        <>
          <h2 className="bg-[#D0F7FA] text-lg sm:text-2xl font-semibold px-2  sm:px-8 py-5">
            Upload cover image
          </h2>
          <div className="relative rounded-lg border-dashed m-5 border-2 border-black p-6 px-12 hover:opacity-50 transition">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={ChangImage}
              placeholder="Browse"
              className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
            />
            <div className="text-xs md:text-sm text-gray-500 text-center p-2 md:p-4 ">
              <div className="flex flex-col justify-center items-center p-2 md:p-5 text-black">
                <PiUploadSimple className="text-4xl md:text-6xl" />
                <h3 className="font-medium text-base">Upload cover image</h3>
              </div>
              <h5 className="text-[#979797] text-base">
                16:9 ratio is recommended. Max image size 1mb
              </h5>
            </div>
          </div>
        </>
      ) : (
        // Displayed when an image is selected.
        <div>
          <div className="max-h-[350px] overflow-hidden">
            <img src={image} alt="cover_image" className="w-full h-full object-cover" />
          </div>
          <div className="relative text-red-600">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={ChangImage}
              placeholder="Browse"
              className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
            />
            <button className="cursor-pointer flex items-center  gap-4 bg-white text-red-600 p-6">
              <IoCloseSharp className="text-4xl" />
              <span className="text-lg font-semibold">Delete & re-upload</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddImage;
