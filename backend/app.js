const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();
const errorHandler = require('./middleware/errorMiddleware');


app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/tasks', require('./routes/taskRoutes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(errorHandler);

module.exports = app;
