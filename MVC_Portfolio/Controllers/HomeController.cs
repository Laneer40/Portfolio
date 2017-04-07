using Blog2.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MVC_Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Main Page";
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModels model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold> ({1})</p><p>Message:</p><p>{2}</p>";
                    var from = "MyPortfolio<ltcbandli98@gmail.com>";
                    model.Body = "This is a message from your Portfolio site. The name and the email of the contacting person is above.";

                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"]) { Subject = "Portfolio Contact Email", Body = string.Format(body, model.FromName, model.FromEmail, model.Body), IsBodyHtml = true };

                    var svc = new PersonalEmail(); await svc.SendAsync(email);

                    return RedirectToAction("Index");
                }
                catch (Exception ex) { Console.WriteLine(ex.Message); await Task.FromResult(0); }
            }
            return RedirectToAction("Index");
        }
    }
}