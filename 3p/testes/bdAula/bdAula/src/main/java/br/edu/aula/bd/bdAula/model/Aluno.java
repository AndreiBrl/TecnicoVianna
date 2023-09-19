package br.edu.aula.bd.bdAula.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class Aluno {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)


    private int id;
    private String nome;

    private double nota;

    public Aluno(int id, String nome, double nota){
        this.nome=nome;
        this.id=id;
        this.nota=nota;
    }
    

}
