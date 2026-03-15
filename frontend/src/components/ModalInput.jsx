import { useState } from "react";
export default function ModalInput({ children }) {
	
	return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 transition-opacity duration-300">
      <div
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative transform transition-all duration-300"
      >
        <button className="absolute top-2 right-2 text-gray-500">✕</button>
        {children}
      </div>
    </div>
  );
}
