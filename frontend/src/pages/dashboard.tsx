
import { useEffect, useState } from "react";
import Layout from "../components/layout";
interface QueryData {
  comment: string;
  createdAt: string;
  category : string;
}

const Dashboard: React.FC = () => {
  const [queries, setQueries] = useState<QueryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");
      const email = userInfo.email;

      if (!email) {
        alert("User is not authenticated!");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/auth/services?category=General-Queries&email=${email}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setQueries(data);
        } else {
          alert("Failed to fetch data for General Queries.");
        }
      } catch (error) {
        console.error("Error fetching General Queries:", error);
        alert("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Layout />
      <div className="p-6 bg-[#F6F8FE] min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-center">General Queries</h1>

        {loading ? (
          <div className="text-center text-black ">Loading...</div>
        ) : queries.length > 0 ? (
          <div className="space-y-4">
            {queries.map((query, index) => (
              <div key={index} className="p-4 bg-white shadow rounded-lg border">
                <div className="flex justify-between items-center">
                  <p className="text-base text-gray-700"> Query : {query.comment}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(query.createdAt).toLocaleString()}
                  </p>
                </div>
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

export default Dashboard;