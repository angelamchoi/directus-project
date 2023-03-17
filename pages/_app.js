import { QueryClientProvider, QueryClient } from "react-query";
import "../styles/index.css";
import Card from "../components/Card";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1> Contact Us Data from Directus </h1>
        <Card />
      </QueryClientProvider>
    </>
  );
};

export default App;
