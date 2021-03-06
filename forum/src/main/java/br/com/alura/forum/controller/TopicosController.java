package br.com.alura.forum.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import br.com.alura.forum.controller.dto.DetalhesTopicoDto;
import br.com.alura.forum.controller.dto.TopicoDto;
import br.com.alura.forum.controller.form.AtualizacaoTopicoForm;
import br.com.alura.forum.controller.form.TopicoForm;
import br.com.alura.forum.modelo.Topico;
import br.com.alura.forum.repository.CursoRepository;
import br.com.alura.forum.repository.TopicoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.transaction.Transactional;
import javax.validation.Valid;

@RestController
@RequestMapping("/topicos")
public class TopicosController {
	
	//injeção de depedencias
	@Autowired
	private TopicoRepository topicoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    //@ResponseBody
    //RestController -> Diz ao spring que a classe irá retornar dados (Sem o uso da anotação @ResponseBody)

    // List <Topico>  ->  Classe do Dominio , não é boa prática (ex:Se campo senha existir ele será apresentado)
    // List <TopicoDto>  -> Data transfer Object   ,

    @GetMapping
    public List <TopicoDto> lista(String nomeCurso){

        //Apresenta como lista TODOS os items do repository topicos -> findAll()
    	if(nomeCurso == null ){
            List <Topico> topicos = topicoRepository.findAll();
            //metodo coverter mapeia/apresenta todos os items de uma lista
            return TopicoDto.converter(topicos);
        }else{
            List <Topico> topicos = topicoRepository.findByCursoNome(nomeCurso);
            //metodo coverter mapeia/apresenta todos os items de uma lista
            return TopicoDto.converter(topicos);
        }
    }

    @PostMapping
    //RequestBody indica que dados estão no corpo
    public ResponseEntity<TopicoDto> cadastrar(@RequestBody @Valid TopicoForm form, UriComponentsBuilder UriBuilder){
        Topico topico = form.converter(cursoRepository);
        topicoRepository.save(topico);

        URI uri = UriBuilder.path("/topicos/{id}").buildAndExpand(topico.getId()).toUri();
        return ResponseEntity.created(uri).body(new TopicoDto(topico));
    }

    @GetMapping("/{id}")
    @Transactional
    public ResponseEntity<DetalhesTopicoDto> detalhar(@PathVariable Long id) {

        Optional<Topico> topico = topicoRepository.findById(id);
        if (topico.isPresent()) {
            return ResponseEntity.ok(new DetalhesTopicoDto(topico.get()));
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<TopicoDto> atualizar(@PathVariable Long id,@RequestBody @Valid AtualizacaoTopicoForm form){

        Optional<Topico> optional = topicoRepository.findById(id);
        if (optional.isPresent()) {
            Topico topico = form.atualizar(id, topicoRepository);
            return ResponseEntity.ok(new TopicoDto(topico));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> remover(@PathVariable Long id){

        Optional<Topico> optional = topicoRepository.findById(id);
        if (optional.isPresent()) {
            topicoRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

}
