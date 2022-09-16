import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { IEmployee } from "../models/IEmployee";
const getEmployees = () => {
    let employee: IEmployee[] = [];
    for (let index = 1; index <= 10; index++) {
        employee.push({
            id: index + 1,
            firstName: `firstName ${index}`,
            lastName: `lastName ${index}`,
            email: `firstName${index}.lastName${index}@test.com`,
            createdDate: new Date()
        });
    }
};
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify(getEmployees()),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: 'An error occured',
        };
    }
};
