import React, { useState } from 'react';

const ChessGameOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Are you ready to play?</h2>
            <button onClick={handleOverlayClose}>Let's Play</button>
          </div>
        </div>
      )}
      {/* Your chess game components go here */}
    </div>
  );
};

export default ChessGameOverlay;