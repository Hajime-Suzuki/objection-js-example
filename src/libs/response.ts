import { APIGatewayEvent, Context } from 'aws-lambda'

export const handleRequestAndResponse = (func: Function) => {
  return async (event: APIGatewayEvent, context: Context) => {
    event = parseEventBody(event)
    console.log({ body: event.body, params: event.pathParameters })
    try {
      const res = await func(event, context)
      return {
        statusCode: 200,
        body: JSON.stringify(res, null, 2)
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      }
    }
  }
}

const parseEventBody = (event: APIGatewayEvent) => {
  return { ...event, body: event.body ? JSON.parse(event.body) : null }
}
