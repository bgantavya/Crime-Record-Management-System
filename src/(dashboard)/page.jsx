import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-yellow-500 text-white p-6 space-y-8">
      <h1 className="text-2xl font-bold">🚀 Dashboard</h1>

      {/* Default Navigation */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-semibold text-lg underline">Main</h2>
        <Link to="/" className="hover:underline">🏠 Home</Link>
        <Link to="/create-report" className="hover:underline">📝 Create Report</Link>
        <Link to="/aa" className="hover:underline">❌ Not Found (Test 404)</Link>
      </div>

      {/* Authentication Routes */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-semibold text-lg underline">Authentication</h2>
        <Link to="/signin" className="hover:underline">🔐 Sign In</Link>
        <Link to="/signup" className="hover:underline">🧾 Sign Up</Link>
        <Link to="/forgot-pass" className="hover:underline">🔑 Forgot Password</Link>
      </div>

      {/* Reports */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-semibold text-lg underline">Reports</h2>
        <Link to="/reports" className="hover:underline">📑 Report Board</Link>
        <Link to="/report/123" className="hover:underline">📄 Example Report (ID: 123)</Link>
      </div>

      {/* Criminals */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-semibold text-lg underline">Criminal Records</h2>
        <Link to="/criminals" className="hover:underline">👮 Criminal Board</Link>
        <Link to="/criminal/42" className="hover:underline">📘 Example Criminal (ID: 42)</Link>
      </div>

      {/* Misc */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-semibold text-lg underline">Miscellaneous</h2>
        <Link to="/" className="hover:underline">🆘 SOS</Link>
      </div>
    </div>
  );
}
