// Data-Visualization-Dashboard
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import xlsx from 'xlsx';

const app = express();

// Middleware
app.use(cors());
app.use(helmet());

// Middleware to parse JSON data
app.use(express.json());

// Temporary storage for registered users
let users = [{ username: 'demo', email: 'demo@email.com', password: 'demo123' }];

// Register endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }
  const newUser = { username, email, password };
  users.push(newUser);
  res.status(200).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  res.status(200).json({ message: 'Login successful' });
});

// Endpoint to get data from the Excel file
app.get('/dashboard', (req, res) => {
  try {
    // Read the Excel file
    const workbook = xlsx.readFile('Frontend Developer Assignment Data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    // Convert the Excel data to JSON
    const jsonData = xlsx.utils.sheet_to_json(sheet);
    // Convert date strings to ISO format in each row
    const jsonWithISODate = jsonData.map((row) => {
      const dateField = row['Day']; // Assuming 'Day' is the column name for the date field
      if (dateField) {
        const parsedDate = xlsx.SSF.parse_date_code(dateField);
        const formattedDate = `${parsedDate.d.toString().padStart(2, '0')}-${parsedDate.m.toString().padStart(2, '0')}-${parsedDate.y}`;
        row['Day'] = formattedDate; // Convert 'Day' to DD-MM-YYYY format
      }
      return row;
    });
    // Prepare the response object
    const responseObject = {
      count: jsonWithISODate.length,
      data: jsonWithISODate,
    };
    res.json(responseObject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
