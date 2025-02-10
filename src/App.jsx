import React from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PasswordGenerator } from "./components/password/PasswordGenerator";
import { TechnologyCard } from "./components/tech/TechnologyCard";
import { technologies } from "./constants/technologies";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <main className="max-w-4xl mx-auto">
        <Header />
        <PasswordGenerator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} {...tech} />
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
