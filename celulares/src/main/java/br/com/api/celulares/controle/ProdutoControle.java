package br.com.api.celulares.controle;

import org.springframework.web.bind.annotation.RestController;

import br.com.api.celulares.modelo.ProdutoModelo;
import br.com.api.celulares.modelo.RespostaModelo;
import br.com.api.celulares.servico.ProdutoServico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



// Responsável por criar rotas e ter acesso a requisições http


@RestController
@CrossOrigin (origins = "*") // para cors
public class ProdutoControle {


    @Autowired
    private ProdutoServico ps;



    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm){

        return ps.cadastrarAlterar(pm, "cadastrar");

    }

    @PutMapping("/atualizar")
    public ResponseEntity<?> atualizar(@RequestBody ProdutoModelo pm){

        return ps.cadastrarAlterar(pm, "atualizar");
    }

    @DeleteMapping("/deletar/{id}")

    public ResponseEntity <RespostaModelo> deletar(@PathVariable long id){

        return ps.deletar(id);
    }


    @GetMapping("/listar")
    public Iterable <ProdutoModelo> listar(){

        return ps.listar();
    }


    @GetMapping("/listar/{id}")
    public ResponseEntity<?> listarById(@PathVariable Long id) {
        return ps.listarById(id);
    }
    
   
    @GetMapping("/")
    public String rota(){
        return "Api de Produtos funcionando";
    }
    
}
