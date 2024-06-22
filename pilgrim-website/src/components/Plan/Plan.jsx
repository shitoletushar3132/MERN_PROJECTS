import { useState } from "react";

function Plan() {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    travelerName: "",
    phoneNumber: "+91 ",
    endDate: "",
    travelers: 1,
    activities: [],
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip Planned:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-lg rounded-md m-3">
      <h2 className="text-2xl font-semibold mb-5">
        Plan Your Trip with Pilgrim Journey
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="destination"
          >
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="travelerName"
          >
            Enter Name
          </label>
          <input
            type="text"
            id="travelerName"
            name="travelerName"
            value={formData.travelerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Enter a Phone No.
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="endDate"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="travelers"
          >
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Activities (select all that apply)
          </label>
          <div className="space-y-2">
            {[
              "Hiking",
              "Need Guide",
              "VIP Passes",
              "traking",
              "Tent",
              "hotel",
              "rooms",
              "Food Tasting",
              "Shopping",
            ].map((activity) => (
              <div key={activity} className="flex items-center">
                <input
                  type="checkbox"
                  id={activity}
                  name="activities"
                  value={activity}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={activity} className="text-gray-700">
                  {activity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Plan Trip
          </button>
        </div>
      </form>
    </div>
  );
}

export default Plan;
