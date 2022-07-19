using Ionic.Zip;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ClientesProspectos.Controllers
{
    public class ArchivosController : Controller
    {

        public IActionResult Index()
        {

            return View();

        }

        [HttpPost("FileUpload")]
        public async Task<IActionResult> FileUpload(List<IFormFile> files, string usuario)
        {
            var NombreCarpeta = usuario;

            var size = files.Sum(f => f.Length);
            var filePaths = new List<string>();

            foreach (var formfile in files)
            {
                if (formfile.Length > 0)
                {
                    var newfolder = Directory.GetCurrentDirectory() + "/wwwroot/Archivos/"+ NombreCarpeta;

                    Directory.CreateDirectory(newfolder);

                    var filePath = Path.Combine(newfolder, formfile.FileName);
                    filePaths.Add(filePath);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formfile.CopyToAsync(stream);
                    }
                }
            }
            return Redirect("/home/Listado");
            //return null;
        }



        //[HttpPost("FileDownload")]
        //public List<string> FileDownload(string usuario)
        //{
        //    var NombreCarpeta = usuario;             

        //    var Ruta = Directory.GetCurrentDirectory() + "/wwwroot/Archivos/" + NombreCarpeta;
        //    var dir = new System.IO.DirectoryInfo(Server.MapPath(""));
        //    System.IO.FileInfo[] fileNames = dir.GetFiles("*.*");
        //}


        [HttpPost("FileDownload")]
        public FileResult FileDownload(string usuario)
        {
            var NombreCarpeta = usuario;             

            var Ruta = Directory.GetCurrentDirectory() + "/wwwroot/Archivos/" + NombreCarpeta;

            //var Archivo = System.IO.File.ReadAllBytes(Ruta);

            using (ZipFile zip = new ZipFile())
            {
                zip.AddDirectory(Ruta);

                using (MemoryStream output = new MemoryStream())
                {
                    zip.Save(output);
                    return File(output.ToArray(), "application/zip", NombreCarpeta+".zip");
                }
            }

        }
    }
}
