package br.edu.aula.bd.bdAula.service;

import br.edu.aula.bd.bdAula.dao.AlunoDao;
import br.edu.aula.bd.bdAula.model.Aluno;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.stereotype.Service;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles({"test"})
@Service

public class AlunoServiceBancoMockTest {

    @MockBean
    AlunoDao a;

    @Autowired
    AlunoService aServ;

    @Test
    @DisplayName("Teste aluno aprovado")
    public  void teste001(){
        int idAluno=1;

        Aluno aRet = new Aluno(1,"zezizi",10);
        Mockito.when(a.getReferenceById(1)).thenReturn(aRet);
        String esperado = "Aluno nao esta de final";

        try{
           double resultado = aServ.precisaTIrarNafinal(idAluno);
            Assertions.fail("erro");

        } catch (Exception e){
            Assertions.assertEquals(esperado,e.getMessage());
        }
    }
    @Test
    @DisplayName("Teste aluno aprovado")
    public  void teste002(){
        int idAluno=1;

        Aluno aRet = new Aluno(1,"gustin",1);
        Mockito.when(a.getReferenceById(1)).thenReturn(aRet);
        String esperado = "Aluno nao esta de final";

        try{
            double resultado = aServ.precisaTIrarNafinal(idAluno);
            Assertions.fail("erro");

        } catch (Exception e){
            Assertions.assertEquals(esperado,e.getMessage());
        }
    }
}
