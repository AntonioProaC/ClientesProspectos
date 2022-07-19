using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace ClientesProspectos.Models
{
    public class ModeloProspecto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string APaterno { get; set; }
        public string AMaterno { get; set; }
        public string Calle { get; set; }
        public string Numero { get; set; }
        public string Colonia { get; set; }
        public string CP { get; set; }
        public string Telefono { get; set; }
        public string RFC { get; set; }
        public string Status { get; set; }
        public DateTime FechaCaptura { get; set; }
        public string ObservacionRechazo { get; set; }

    }
}
