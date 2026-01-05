import { useState } from "react";
import Loader from "./Loader";

function LoaderPage() {
  const [loading, setLoading] = useState(false);

  function handleLoading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <h3>Loader Component</h3>

      <button
        className="btn btn-primary"
        onClick={handleLoading}
        disabled={loading}
      >
        {loading ? "Loading..." : "Start Loading"}
      </button>

      {loading && <Loader />}
    </>
  );
}

export default LoaderPage;
