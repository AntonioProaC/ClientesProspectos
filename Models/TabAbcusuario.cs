using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace ClientesProspectos.Models
{
    [Table("TabAbcusuario", Schema = "dbo")]
    public partial class TabAbcusuario
    {
        [Key]
        public string Id { get; set; }
        public string Password { get; set; }
        public string Nombre { get; set; }
        public string Apaterno { get; set; }
        public string Amaterno { get; set; }
        public string Status { get; set; }
    }
}
