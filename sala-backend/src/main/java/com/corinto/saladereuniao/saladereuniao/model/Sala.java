package com.corinto.saladereuniao.saladereuniao.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="saladereuniao")
public class Sala {
    private long id;
    private String nome;
    private String data;
    private String inicioHora;
    private String terminoHora;

    public Sala(){

    }

    public Sala(long id, String nome, String data, String inicioHora, String terminoHora){
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.inicioHora = inicioHora;
        this.terminoHora = terminoHora;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "nome", nullable = false)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(name = "data", nullable = false)
    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    @Column(name = "inicioHora", nullable = false)
    public String getInicioHora() {
        return inicioHora;
    }

    public void setInicioHora(String inicioHora) {
        this.inicioHora = inicioHora;
    }

    @Column(name = "terminoHora", nullable = false)
    public String getTerminoHora() {
        return terminoHora;
    }

    public void setTerminoHora(String terminoHora) {
        this.terminoHora = terminoHora;
    }

    @Override
    public String toString(){
        return "Sala [id = " + id + ", nome = " + nome + ", data = " + data + ", inicioHora = " + inicioHora + ", terminoHora = " + terminoHora + "]";
    }
}
