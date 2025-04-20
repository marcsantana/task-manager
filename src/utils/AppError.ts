export class AppError {
      statusCode: number
      message: string

      constructor(statusCode: number = 400, message: string) {
            this.message = message
            this.statusCode = statusCode
      }
}