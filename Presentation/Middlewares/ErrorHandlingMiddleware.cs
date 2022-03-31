using Domain.Exceptions;
using Domain.Https.Errors;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Text.Json;

namespace Presentation.Middlewares
{
    public class ErrorHandlingMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next.Invoke(context);
            }
            catch (NotFoundException e)
            {
                await HandleExceptionAsync(context, e, 404);
            }
            catch (Exception e)
            {
                await HandleExceptionAsync(context, e);
            }
        }

        private async Task HandleExceptionAsync(HttpContext context, Exception e , int StatusCode = 0)
        {
            context.Response.ContentType = "application/json";

            if (StatusCode == 0)
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            else
                context.Response.StatusCode = StatusCode;

            var response = new ErrorDetails(context.Response.StatusCode, e.Message);

            var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

            var json = JsonSerializer.Serialize(response, options);

            await context.Response.WriteAsync(json);
        }

    }
}
