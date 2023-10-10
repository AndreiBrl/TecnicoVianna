using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NomeDoSeuProjeto.Models
{
    public class Pessoa
    {

        public string? Id {get;set;}
        public string nome { get; set; } = "";
        public int idade { get; set; }
        public string cargo { get; set; } = "";

    }
}