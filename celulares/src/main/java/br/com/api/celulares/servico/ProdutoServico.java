package br.com.api.celulares.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.celulares.modelo.ProdutoModelo;
import br.com.api.celulares.modelo.RespostaModelo;
import br.com.api.celulares.repositorio.ProdutoRepositorio;



@Service
public class ProdutoServico {

    
    @Autowired
    private ProdutoRepositorio pr;


    @Autowired
    private RespostaModelo rm;


    // listar todos os celulares
    public Iterable <ProdutoModelo> listar(){
        return pr.findAll();
    }



    // método para listar pelo Id
    public ResponseEntity<?> listarById(Long id) {
        // Busca o produto pelo ID
        ProdutoModelo produto = pr.findById(id)
                                  .orElse(null); // Retorna null se não encontrar
  
        // Verifica se o produto foi encontrado
        if (produto == null) {
            rm.setMensagem("Produto não encontrado para o ID: " + id);
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<ProdutoModelo>(produto, HttpStatus.OK);
        }
    } 




    //cadastrar e atualizar celulares
    public ResponseEntity<?> cadastrarAlterar(ProdutoModelo pm, String acao){

        if(pm.getMarca().equals("")){
            rm.setMensagem("O nome da marca do Ceular é Obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if(pm.getModelo().equals("")){
            rm.setMensagem("O nome do modelo do Ceular é Obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if(pm.getPreco() == null || pm.getPreco() < 0){
            rm.setMensagem("Coloque o preço do Celular");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else if(pm.getCor().equals("")){
            rm.setMensagem("A cor do Celular é obrigatória");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        } else {

            if(acao.equals("cadastrar")){
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.OK);
            }

            

        }

    }


    public ResponseEntity <RespostaModelo> deletar(Long id){

        pr.deleteById(id);

        rm.setMensagem("Produto deletado com Sucesso");

        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }
    
}
