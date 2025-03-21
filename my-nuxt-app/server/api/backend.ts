// server/api/calculate.ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { num1, num2, operation } = body;

    let result;
    switch (operation) {
        case 'add':
        result = num1 + num2;
        break;
        case 'subtract':
        result = num1 - num2;
        break;
        case 'multiply':
        result = num1 * num2;
        break;
        case 'divide':
        result = num1 / num2;
        break;
        default:
        result = null;
    }

    return { result };
});