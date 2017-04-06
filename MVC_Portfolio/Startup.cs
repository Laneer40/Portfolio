using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Portfolio.Startup))]
namespace MVC_Portfolio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
