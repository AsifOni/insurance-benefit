import { useNinetailed } from '@ninetailed/experience.js-next';

const DropDown = () => {
  const { identify } = useNinetailed();
  const handleChange = async (event) => {
    if (event.target.value !== '') {
      const traits = { 'currentPackage': event.target.value };
      await identify('', traits);
    }
  };

  return (
    <>
      <select
        className="bg-gray-50 border border-gray-300 mr-8 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(event) => handleChange(event)}
      >
        <option value="">Select Plan</option>
        <option value="safeGuard">Safe Guard</option>
        <option value="travelSure">Travel Sure</option>
        <option value="coverTrip">Cover Trip</option>
      </select>
    </>
  );
};

export default DropDown;
