using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;

namespace FirstWebAPI.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            File.AppendAllText("ErrorLog.txt",
                $"{DateTime.Now}: {context.Exception.Message}\n");

            context.Result = new ObjectResult("Internal Server Error")
            {
                StatusCode = 500
            };

            context.ExceptionHandled = true;
        }
    }
}