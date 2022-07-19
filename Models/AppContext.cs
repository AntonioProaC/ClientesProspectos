using Microsoft.EntityFrameworkCore;
using ClientesProspectos.Models;

#nullable disable

namespace ClientesProspectos.Models
{
    public partial class AppContext : DbContext
    {

        public AppContext()
        {
        }

        public AppContext(DbContextOptions<AppContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TabAbcusuario> TabAbcusuarios { get; set; }
        public virtual DbSet<ModeloProspecto> ModeloProspecto { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Data Source=ClientesProspectosdb.mssql.somee.com;Initial Catalog=ClientesProspectosdb;User ID=AntonioProa_SQLLogin_1;Password=z38de9jla4;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<TabAbcusuario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Usuarios");

                entity.Property(e => e.Id)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Apaterno)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("APaterno");

                entity.Property(e => e.Amaterno)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("AMaterno");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(1)
                    .IsUnicode(false);

            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
