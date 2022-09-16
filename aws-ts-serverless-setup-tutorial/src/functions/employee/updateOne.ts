import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const body = event.body || null;
        const pathParameters = event.pathParameters;
        const queryStringParameters = event.queryStringParameters;
        console.log(JSON.stringify(body));
        return {
            statusCode: 200,
            body: JSON.stringify({ body: body, query: queryStringParameters, path: pathParameters }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'An error occured',
        };
    }
};
