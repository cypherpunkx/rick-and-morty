import RootRoutes from "./routes/routes";
import { Navbar } from "./components";

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="my-6">
        <RootRoutes />
      </main>
    </div>
  );
}

export default App;
