// Import the React library.
import React from 'react';

// Import the Sidebar and ApplicationForm components.
import Sidebar from './Components/Sidebar';
import ApplicationForm from './AppForm/ApplicationForm';

// Define the App function component.
function App() {
  // Return the JSX representing the main structure of the application.
  return (
    <div className="App text-gray-500 flex">
      {/* Render the Sidebar component. */}
      <Sidebar />
      {/* Render the ApplicationForm component. */}
      <ApplicationForm />
    </div>
  );
}

// Export the App component to be used in other parts of the application.
export default App;