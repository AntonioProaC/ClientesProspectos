using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClientesProspectos.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace ClientesProspectos.Controllers
{
    public class TabAbcusuarioController : Controller
    {
        public Models.AppContext _context;

        public TabAbcusuarioController(Models.AppContext master)
        {
            this._context = master;
        }

        [HttpPost]
        public IActionResult GetUsurio(string Id, string Password)
        {
            var usuario = _context.TabAbcusuarios.Where(s => s.Id == Id && s.Password == Password);

            if (usuario.Any())
            {
                if (usuario.Where(s => s.Id == Id && s.Password == Password).Any())
                {

                    HttpContext.Session.SetString("Usuario", Id);
                    return Json(new { status = true });
                }
                else
                {
                    return Json(new { status = false });
                }
            }
            else
            {
                return Json(new { status = false });
            }
        }

        [HttpPost()]
        public async Task<List<ModeloProspecto>> CapturarProspecto(string Nombre, string APaterno, string AMaterno, string Calle, string Numero, string Colonia, string CP, string Telefono, string RFC)
        {

            string spName = " exec SP_CapturarProspecto '" + Nombre+"','"+APaterno + "','" + AMaterno + "','" + Calle + "','" + Numero + "','" + Colonia + "','" + CP + "','" + Telefono + "','" + RFC + "'";

            return await this._context.ModeloProspecto.FromSqlRaw(spName).ToListAsync();
        }

        [HttpPost()]
        public async Task<List<ModeloProspecto>> ObtenerProspectos()
        {

            string spName = " exec SP_ObtenerProspectos ";

            return await this._context.ModeloProspecto.FromSqlRaw(spName).ToListAsync();
        }
        
        [HttpPost()]
        public async Task<List<ModeloProspecto>> ObtenerInfoProspecto(string ID)
        {

            string spName = " exec SP_ObtenerInfoProspecto '"+ID+"'";

            return await this._context.ModeloProspecto.FromSqlRaw(spName).ToListAsync();
        }
        
        [HttpPost()]
        public async Task<List<ModeloProspecto>> ActualizarRechazado(string ID, string Observaciones)
        {

            string spName = " exec SP_ActualizarRechazado '" + ID+"', '"+ Observaciones+"'";

            return await this._context.ModeloProspecto.FromSqlRaw(spName).ToListAsync();
        }
        
        [HttpPost()]
        public async Task<List<ModeloProspecto>> ActualizarAutorizado(string ID)
        {

            string spName = " exec SP_ActualizarAutorizado '" + ID+"'";

            return await this._context.ModeloProspecto.FromSqlRaw(spName).ToListAsync();
        }

    }
}