
// components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
            <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f9f9f9;
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #ccc;
          border-top: 5px solid #0070f3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
    );
};

export default Loader;
