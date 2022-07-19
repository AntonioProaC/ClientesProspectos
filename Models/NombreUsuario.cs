using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ClientesProspectos.Models
{ 
    public partial class NombreUsuario
    {
        [Key] 
        public string Nombre { get; set; } 
    }
}
