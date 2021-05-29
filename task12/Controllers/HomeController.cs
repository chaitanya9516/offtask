using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using task12.Models;

namespace task12.Controllers
{
    public class HomeController : Controller
    {

        officetask2Entities db = new officetask2Entities();

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(employee e)
        {
            db.employees.Add(e);
            db.SaveChanges();
            return View();
        }


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}