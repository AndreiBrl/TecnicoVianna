package br.edu.aula.bd.bdAula.service;

import br.edu.aula.bd.bdAula.model.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class AlunoService {

    @Autowired
     Aluno aDao;

    public void salvarAluno(Aluno a1) {
    }
    public double precisaTIrarNafinal(int id) throws Exception{

        Aluno a = aDao.getReferenceById(id);
        if(a==null){

            throw  new Exception("Aluno nao encontrado");

        }
        if(!a.isFinal()){
            throw new Exception("Aluno não esta de final");
        }

    }

}
