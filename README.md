# Electricity Bill Calculator

This project is a simple Electricity Bill Calculator web application. Users can enter their unique electricity number to see their respective charges based on the number of units consumed. The application is built using HTML, CSS, and JavaScript.

## Features

- Input field for entering the electricity unique number.
- Displays the respective charge based on the units consumed.
- Shows a detailed breakdown of how the bill is calculated.
- Responsive design with a user-friendly interface.

## Unique Numbers

The following are the unique numbers available in the dummy database along with their respective units consumed:

| Unique Number | Units Consumed |
| ------------- | -------------- |
| A123          | 120            |
| B456          | 80             |
| C789          | 250            |
| D012          | 600            |
| E345          | 900            |

## Fair Charging Categories

The fair charging categories are as follows:

1. **Up to 100 units**:
   - First 50 units: ₹1.45/unit
   - 51-100 units: ₹2.60/unit
2. **100 to 200 units**:
   - 0-100 units: ₹3.30/unit
   - 101-200 units: ₹4.30/unit
3. **More than 200 units**:
   - 0-200 units: ₹5.00/unit
   - 201-300 units: ₹7.20/unit
   - 301-400 units: ₹8.50/unit
   - 401-800 units: ₹9.00/unit
   - Above 800 units: ₹9.50/unit

## Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `styles.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the logic for calculating the electricity bill.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/electricity-bill-calculator.git
   ```
