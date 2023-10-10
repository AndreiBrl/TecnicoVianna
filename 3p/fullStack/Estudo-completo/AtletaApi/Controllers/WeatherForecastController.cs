using Microsoft.AspNetCore.Mvc;
using AtletaApi.Models;
using Microsoft.AspNetCore.Http.HttpResults;



namespace AtletaApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AtletaController : ControllerBase
{
    private static List<Atleta> objetos;
    static AtletaController()
    {


        objetos = new List<Atleta>(){
                    new() {
                    Id = "X1", Nome = "Ana", Altura = 1.7, Peso = 65,
                    Records = new()
                    {
                    new() { Id = "X1.1", Data = new DateTime(2020, 1, 2), PontosMarcados = 50 },
                    new() { Id = "X1.2", Data = new DateTime(2022, 3, 4), PontosMarcados = 60 }
                    }
                    },
                    new() {
                    Id = "X2", Nome = "Bruno", Altura = 2, Peso = 90,
                    Records = new()
                    {
                    new() { Id = "X2.1", Data = new DateTime(2023, 5, 6), PontosMarcados = 40 }
                    }
            }
 };

    }


    [HttpGet]
    public ActionResult<IEnumerable<Atleta>> Get()
    {
        if (objetos == null)
        {
            return NotFound();
        }
        return objetos;
    }

    [HttpGet("{id}")]
    public ActionResult<Atleta> GetId(string id)
    {
        var obj = objetos?.FirstOrDefault(x => x.Id == id);
        if (obj == null)
        {
            return NotFound();

        }
        return obj;
    }
    [HttpPost]
    public ActionResult<Atleta> Post(Atleta obj)
    {
        if (obj.Id == null)
        {
            obj.Id = Guid.NewGuid().ToString();
        }
        objetos.Add(obj);
        return CreatedAtAction(
            nameof(GetId),
            new { id = obj.Id },
            obj
        );
    }
    [HttpPut("{id}")]
    public IActionResult Put(string id, Atleta obj)
    {
        if (id != obj.Id)
            return BadRequest();

        var objOrig = objetos.FirstOrDefault(x => x.Id == id);
        if (objOrig == null)
            return NotFound();
        objOrig.Altura = obj.Altura;
        objOrig.Nome = obj.Nome;
        objOrig.Peso = obj.Peso;
        return NoContent();
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(string id)
    {
        if (objetos == null)
            return NotFound();

        var obj = objetos.FirstOrDefault(x => x.Id == id);

        if (obj == null)
            return NotFound();

        objetos.Remove(obj);
        return NoContent();
    }

    [HttpGet("{id}/records")]
    public ActionResult<IEnumerable<AtletaRecord>> GetRecords(string id)
    {
        var obj = objetos?.FirstOrDefault(x => x.Id == id);
        if (obj == null || obj.Records == null)
            return NotFound();
        return obj.Records;
    }
}