package br.com.api.celulares.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity

@Table(name = "celulares")

//lombook
@Getter
@Setter

public class ProdutoModelo {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 
    private String marca;
    private String modelo;
    private Double preco;
    private String cor;
    
}
