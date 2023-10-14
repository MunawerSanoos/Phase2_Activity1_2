const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen (port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
}); 


app.get('/flights', (req, res) => {

    res.json({ message: 'Get all flights endpoint' });
  });
  

app.get('/flights/:flightId', (req, res) => {
    const flightId = req.params.flightId;
   
    res.json({ message: `Get details of flight ${flightId}` });
  });

  app.post('/flights', (req, res) => {
    const newFlight = req.body;
    
    res.json({ message: 'Create a new flight endpoint', data: newFlight });
  });

  
  app.put('/flights/:flightId', (req, res) => {
    const flightId = req.params.flightId;
    const updatedFlightData = req.body;
    
    res.json({ message: `Update details of flight ${flightId}`, data: updatedFlightData });
  });

  
  app.delete('/flights/:flightId', (req, res) => {
    const flightId = req.params.flightId;
   
    res.json({ message: `Delete flight ${flightId} endpoint` });
  });
  