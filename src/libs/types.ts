import { APIGatewayProxyEvent } from 'aws-lambda'

export type GatewayEvent<
  TBody extends Record<string, any> | null,
  TParamsKey extends string = any
> = {
  body: TBody
  pathParameters: Record<TParamsKey, string>
} & APIGatewayProxyEvent
