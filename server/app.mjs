// Data-Visualization-Dashboard
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import xlsx from 'xlsx';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());

// Endpoint to get data from the Excel file
app.get('/dashboard', (req, res) => {
  try {
    // Read the Excel file
    const workbook = xlsx.readFile('Frontend Developer Assignment Data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert the Excel data to JSON
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // Prepare the response object
    const responseObject = {
      count: jsonData.length,
      data: jsonData,
    };

    res.json(responseObject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
