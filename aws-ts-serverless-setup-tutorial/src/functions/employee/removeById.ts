import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const queryStringParameters = event.queryStringParameters;
        console.log(JSON.stringify(queryStringParameters));
        return {
            statusCode: 200,
            body: JSON.stringify(queryStringParameters),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'An error occured',
        };
    }
};
