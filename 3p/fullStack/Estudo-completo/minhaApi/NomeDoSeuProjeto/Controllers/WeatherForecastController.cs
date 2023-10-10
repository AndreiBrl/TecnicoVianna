

using Microsoft.AspNetCore.Mvc;
using NomeDoSeuProjeto.Models;

namespace NomeDoSeuProjeto.Controllers;

[ApiController]
[Route("[controller]")]
public class bancoRH : ControllerBase
{
    private static List<Pessoa> obj;

    static bancoRH()
    {
        obj = new List<Pessoa>()
        {
            new(){
                Id="1",nome="Andrei",idade=32,cargo="Engenheiro"
            },
            new(){
                Id="2",nome="Marcos",idade=12,cargo="farmaceutico"
            }

        };
    }

    [HttpGet]
    public ActionResult<IEnumerable<Pessoa>> Get()
    {
        if (obj == null)
        {
            return NotFound();
        }
        return obj;
    }
    [HttpGet("{id}")]
    public ActionResult<Pessoa>GetId(string id)
    {

        var objeto = obj?.FirstOrDefault(x => x.Id == id);
        if (objeto == null)
        {
            return NotFound();
        }
        return objeto;
    }

     [HttpPost]
    public ActionResult<Pessoa> Post(Pessoa pessoa)
    {
        if (pessoa.Id == null)
        {
            pessoa.Id = Guid.NewGuid().ToString();
        }
        obj.Add(pessoa);
        return CreatedAtAction(
            nameof(GetId),
            new { id = pessoa.Id },
            pessoa
        );
    }
    [HttpPut("{id}")]
    public IActionResult Put(string id, Pessoa pessoa)
    {
        if (id != pessoa.Id)
            return BadRequest();

        var objOrig = obj.FirstOrDefault(x => x.Id == id);
        if (objOrig == null)
            return NotFound();
        objOrig.nome = pessoa.nome;
        objOrig.cargo = pessoa.cargo;
        objOrig.idade = pessoa.idade;
        return NoContent();
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(string id)
    {
        if (obj == null)
            return NotFound();

        var objeto = obj.FirstOrDefault(x => x.Id == id);

        if (objeto == null)
            return NotFound();

        obj.Remove(objeto);
        return NoContent();
    }
}
