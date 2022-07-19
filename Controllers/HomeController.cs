using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging; 
using System.Diagnostics; 
using ClientesProspectos.Models;
using System.Collections.Generic;
using System;
using System.IO;

namespace ClientesProspectos.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Login()
        {

            HttpContext.Session.SetString("Usuario", "");
            ViewBag.sessionv = "";

            return View();

        }

        public IActionResult Inicio()
        {
            ViewBag.sessionv = HttpContext.Session.GetString("Usuario");
            if (ViewBag.sessionv != "")
            {

                ViewData["Usuario"] = ViewBag.sessionv;

                return View();
            }
            else
            {
                return RedirectToPage("/");
            }
        }

        public IActionResult Listado()
        {
            ViewBag.sessionv = HttpContext.Session.GetString("Usuario");
            if (ViewBag.sessionv != "")
            {

                ViewData["Usuario"] = ViewBag.sessionv;

                return View();
            }
            else
            {
                return RedirectToPage("/");
            }
        }

        public IActionResult Captura()
        {
            ViewBag.sessionv = HttpContext.Session.GetString("Usuario");
            if (ViewBag.sessionv != "")
            {

                ViewData["Usuario"] = ViewBag.sessionv;

                return View();
            }
            else
            {
                return RedirectToPage("/");
            }
        }

        public IActionResult Evaluacion()
        {
            ViewBag.sessionv = HttpContext.Session.GetString("Usuario");
            if (ViewBag.sessionv != "")
            {

                ViewData["Usuario"] = ViewBag.sessionv;

                return View();
            }
            else
            {
                return RedirectToPage("/");
            }
        }

        public IActionResult Index()
        {
            ViewBag.sessionv = HttpContext.Session.GetString("Usuario");
            if (ViewBag.sessionv != "")
            {

                ViewData["Usuario"] = ViewBag.sessionv;

                return View();
            }
            else
            {
                return RedirectToPage("/");
            }
        }
    }
}
