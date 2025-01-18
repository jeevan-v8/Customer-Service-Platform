import { useState } from "react";

interface CustomerServiceFormProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const CustomerServiceForm: React.FC<CustomerServiceFormProps> = ({ onCancel, onSubmit }) => {
  const [category, setCategory] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");
    const email = userInfo.email;

    const formData = { category, comment ,email};
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/auth/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Request submitted successfully!");
        onSubmit(); // Close the form on successful submission
      } else {
        alert("Failed to submit the request.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-[#F6F8FE] h-full">
      <div className="flex items-center justify-center px-20 py-4">
        <h2 className="text-xl text-black font-bold mb-4">Customer Service Form</h2>
      </div>
      <div className="p-10">
        <form onSubmit={handleSubmit}>
          {/* Category Dropdown */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-2 p-2 border text-black rounded-lg"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="General-Queries">General Queries</option>
              <option value="Product-Features-Queries">Product Features Queries</option>
              <option value="Product-Pricing-Queries">Product Pricing Queries</option>
              <option value="Product-Feature-Implementation-Requests">Product Feature Implementation Requests</option>
            </select>
          </div>

          {/* Comments Text Area */}
          <div className="mb-4">
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
              Comments
            </label>
            <textarea
              id="comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full text-black mt-2 p-2 border rounded-lg"
              rows={4}
              required
            ></textarea>
          </div>

          {/* Cancel and Submit Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerServiceForm;