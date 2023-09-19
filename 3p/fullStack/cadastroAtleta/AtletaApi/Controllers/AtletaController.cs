using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AtletaApi.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace AtletaApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AtletaController : ControllerBase
{


    private static readonly List<Atleta> objetos;


    static AtletaController()
    {

        objetos = new List<Atleta>(){

                new() {Id ="X1", Nome="Ana",Altura=1.7,Peso=40},
                new() {Id ="X2", Nome="Marcos",Altura=2.7,Peso=50}
        };
    }

    // GET

    [HttpGet]
    public ActionResult<IEnumerable<Atleta>> Get()
    {

        // private static readonly List<Atleta> objetos;

        if (objetos == null)
            return NotFound();



        return objetos;
    }


    // get ID

    [HttpGet("(id)")]
    public ActionResult<IEnumerable<Atleta>> GetId(string id)
    {

        var obj = objetos?.FirstOrDefault(x => x.Id == id);

        if (obj == null)
            return NotFound();



        return objetos;
    }
    // POST

    [HttpPost]
    public ActionResult<IEnumerable<Atleta>> Post(Atleta obj)
    {


        if (obj == null)
            obj.Id = Guid.NewGuid().ToString();

        objetos.Add(obj);
        return CreatedAtAction(
            nameof(GetId),
            new
            {
                id = obj.Id
            }, obj);

    }



}



