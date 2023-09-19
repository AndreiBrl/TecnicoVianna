package br.edu.aula.bd.bdAula.service;

import br.edu.aula.bd.bdAula.dao.AlunoDao;
import br.edu.aula.bd.bdAula.model.Aluno;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles({"test"})

public class AlunoServiceTeste {



    @Autowired
    AlunoService aServ;

    @Autowired
    AlunoDao aDao;
    @Test
    @DisplayName("Teste gravação aluno sem nome")

    public void teste001(){

        Aluno a1 = new Aluno (1,"",10);
        String esperado = "nome incorreto";

        try{
            aServ.salvarAluno(a1);

        }
        catch (Exception e){
            Assertions.assertEquals(esperado,e.getMessage());
        }

    }
}
