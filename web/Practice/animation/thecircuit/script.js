// script.js
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".arrow");
  const output = document.getElementById("output");

  // Initialize state (0: |0⟩, 1: |1⟩, 2: superposition |+⟩)
  let state = 0;

  // Button event listeners
  document.getElementById("apply-not").addEventListener("click", () => {
    applyNOTGate();
  });

  document.getElementById("apply-hadamard").addEventListener("click", () => {
    applyHadamardGate();
  });

  // Function to apply the NOT gate
  function applyNOTGate() {
    if (state === 0) {
      state = 1; // Flip from |0⟩ to |1⟩
    } else if (state === 1) {
      state = 0; // Flip from |1⟩ to |0⟩
    }
    updateQubitDisplay();
  }

  // Function to apply the Hadamard gate
  function applyHadamardGate() {
    if (state === 0 || state === 1) {
      state = 2; // Go to superposition |+⟩
    } else {
      state = 0; // Reset to |0⟩ from superposition
    }
    updateQubitDisplay();
  }

  // Update the visual display of the qubit
  function updateQubitDisplay() {
    let rotation;
    let stateLabel;
    switch (state) {
      case 0:
        rotation = 0; // Point straight up
        stateLabel = "100% for |0⟩";
        break;
      case 1:
        rotation = 180; // Point straight down
        stateLabel = "100% for |1⟩";
        break;
      case 2:
        rotation = 90; // Point horizontally (superposition |+⟩)
        stateLabel = "50% for 1 and 50% for 0";
        break;
    }
    arrow.style.transform = `rotate(${rotation}deg)`;
    output.textContent = `${stateLabel}`;
  }
});
