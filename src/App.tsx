import React from "react";
import { APIdescription } from "./components";
import {
  CartSection,
  ProductSection,
  SessionSection,
  UserSection,
} from "./sections";

function App() {
  return (
    <>
      <main className="flex justify-center w-full p-10 xl:mt-10 items-center constrain">
        <div className="w-full">
          {/* header */}
          <APIdescription />
          {/* session routes */}
          <SessionSection />
          {/* user routes */}
          <UserSection />
          {/* product routes */}
          <ProductSection />
          {/* cart routes */}
          <CartSection />
        </div>
      </main>
      <footer className="flex justify-center items-center">
        <p className="secondary-text capitalize">&copy;daniel saunders 2022</p>
      </footer>
    </>
  );
}

export default App;
