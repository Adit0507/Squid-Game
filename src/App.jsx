import { useEffect } from "react";
import { Home } from "./components/Home";
import { Info } from "./components/Info";
import { Details } from "./components/Details";
import { Episodes } from "./components/Episodes";
import { Videos } from "./components/Videos";
import { Footer } from "./components/Footer";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sc = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 4000,
      reset: false,
    });
    sc.reveal(
      `
        #home,
        #info,
        #episodes,
        #details,
        #videos,
        footer
      `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);

  return (
    <div>
      <Home />
      <Info />
      <Episodes />
      <Videos />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
