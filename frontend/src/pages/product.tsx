import { useEffect, useState } from "react";
import Layout from "../components/layout";

interface QueryData {
  comment: string;
  createdAt: string;
}

const ProductRelated: React.FC = () => {
  const [queries, setQueries] = useState<QueryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("product-features-queries");

  useEffect(() => {
    const fetchData = async () => {
        const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");
        const email = userInfo.email;
  
        if (!email) {
          alert("User is not authenticated!");
          return;
        }
      setLoading(true);
      try {
        let endpoint = "";

        // Set endpoint based on active tab
        switch (activeTab) {
          case "product-features-queries":
            endpoint = `http://localhost:8080/auth/services?category=Product-Features-Queries&email=${email}`;
            break;
          case "product-pricing-queries":
            endpoint = `http://localhost:8080/auth/services?category=Product-Pricing-Queries&email=${email}`;
            break;
          case "product-feature-implementation-requests":
            endpoint = `http://localhost:8080/auth/services?category=Product-Feature-Implementation-Requests&email=${email}`;
            break;
          default:
            break;
        }

        const response = await fetch(endpoint);
        if (response.ok) {
          const data = await response.json();
          setQueries(data);
        } else {
          alert("Failed to fetch data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <div>
      <Layout />
      <div className="p-6 bg-[#F6F8FE] min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Product Related Queries
        </h1>

        {/* Tabs Section */}
        <div className="flex space-x-4 mb-6 justify-center">
          <button
            onClick={() => setActiveTab("product-features-queries")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "product-features-queries"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Product Features Queries
          </button>
          <button
            onClick={() => setActiveTab("product-pricing-queries")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "product-pricing-queries"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Product Pricing Queries
          </button>
          <button
            onClick={() => setActiveTab("product-feature-implementation-requests")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "product-feature-implementation-requests"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            Product Feature Implementation Requests
          </button>
        </div>

        {/* Loading & Data Display Section */}
        {loading ? (
          <div className="text-center text-black ">Loading...</div>
        ) : queries.length > 0 ? (
          <div className="space-y-4">
            {queries.map((query, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg border"
              >
                <p className="text-lg text-gray-700">{query.comment}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(query.createdAt).toLocaleString()} {/* Formats the timestamp */}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No queries found.</div>
        )}
      </div>
    </div>
  );
};

export default ProductRelated;