const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        components: {
    securitySchemes: {
        bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
        }
    }
}
,
        openapi: "3.0.0",
        info: {
            title: "Task Manager API",
            version: "1.0.0",
            description: "API for Task Manager with Auth & Role-Based Access"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },
    apis: ["./routes/*.js"] // read routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
