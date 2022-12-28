import React from "react";
import { APIdescription } from "./components";
import {
  CartSection,
  OrderSection,
  ProductSection,
  SessionSection,
  UserSection,
} from "./sections";
import { Toaster } from "react-hot-toast";

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
          {/* order routes */}
          <OrderSection />
        </div>
      </main>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "toast",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // // Default options for specific types
          // success: {
          //   duration: 3000,
          //   theme: {
          //     primary: "green",
          //     secondary: "black",
          //   },
          // },
        }}
      />
      <footer className="flex justify-center items-center">
        <p className="secondary-text capitalize">&copy;daniel saunders 2022</p>
      </footer>
    </>
  );
}

export default App;
