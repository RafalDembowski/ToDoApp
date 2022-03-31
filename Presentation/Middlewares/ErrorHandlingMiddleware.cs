using Domain.Exceptions;

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
                context.Response.StatusCode = 404;

                await context.Response.WriteAsync(e.Message);
            }
        }
    }
}
