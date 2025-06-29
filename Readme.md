# Rubik's Cube Solver (Beginner's Method - Simplified)

This project is a basic Rubik’s Cube simulator and solver using JavaScript. It represents the cube with an object-oriented approach and implements simplified rotation logic with an example of how the front face (`F`) rotates and affects adjacent faces.

---

## Features

- Object-oriented cube representation
- Manual face rotation (`F` face with adjacent effect)
- Random cube scrambling using multiple moves
- Step-by-step visualization of the cube’s state after each move

---

## Project Files

- `index.html` – Contains the webpage layout and button controls
- `script.js` – Contains the main cube logic, rotation, scrambling, and step tracking
- `README.md` – This file, describing the project

---

## How to Use

1. Open `index.html` in any modern web browser.
2. Click the **Scramble** button to shuffle the cube randomly.
3. The visual representation of the cube updates after each move.
4. View the move sequence displayed step-by-step on the webpage.

---

## How It Works

- The cube consists of 6 faces:  
  - U (Up) - White  
  - D (Down) - Yellow  
  - F (Front) - Green  
  - B (Back) - Blue  
  - L (Left) - Orange  
  - R (Right) - Red

- Each face is a 3×3 array (9 color slots).
- The method `rotate(face)` updates the center face and its adjacent edge pieces.
- Only the `F` face rotation includes adjacent effects for demonstration.

---

## Example: Front (F) Face Rotation

When the front face rotates:
- The front face itself is rotated clockwise.
- Edge pieces from the `U`, `L`, `D`, and `R` faces are also rotated accordingly.

This simulates a real Rubik's Cube face turn.

-Future Plans

- Add rotation logic for all remaining faces (`U`, `D`, `L`, `R`, `B`)
- Implement full Beginner’s Method steps:
  - White cross
  - First layer corners
  - Second layer edges
  - Yellow cross and corners
- Add solve button and reset functionality

---

## Credits

This project was developed as part of a fresher/intern-level programming challenge to demonstrate understanding of algorithms, OOP in JavaScript, and DOM-based visualization.
