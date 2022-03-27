package br.com.alura.forum.controller;

import java.util.Arrays;
import java.util.List;

import br.com.alura.forum.controller.dto.TopicoDto;
import br.com.alura.forum.modelo.Curso;
import br.com.alura.forum.modelo.Topico;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicosController {

    @RequestMapping("/topicos")
    //@ResponseBody
    //RestController -> Diz ao spring que a classe irá retornar dados (Sem o uso da anotação @ResponseBody)

    // List <Topico>  ->  Classe do Dominio , não é boa prática (ex:Se campo senha existir ele será apresentado)
    // List <TopicoDto>  -> Data transfer Object   ,

    public List <TopicoDto> lista(){
        Topico topico = new Topico("Duvidas","Funcionamente Spring",new Curso("Spring","Programação"));

        return TopicoDto.converter(Arrays.asList(topico,topico,topico));
    }
}
