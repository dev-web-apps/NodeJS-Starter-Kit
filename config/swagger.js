const swaggerJSDoc=require('swagger-jsdoc')

const swaggerDefinition = {
    info: {
        title: `Starter Kit Swagger`,
        version: `3.0`,
        description: `Swagger - A sample doc for all apis for starter kit swagger`,
    },
}

const options = {
    swaggerDefinition,
    apis: ['api-swagger.yaml'],
}

exports.swaggerSpec= swaggerJSDoc(options)

