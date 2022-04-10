package br.com.alura.forum.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class HelloController {

    @RequestMapping("/Hello") /*Quando será chamado ->  rota */
    @ResponseBody
    //Anotação que diz ao spring que o retorno não será uma página/rota e sim um conteudo
    public String hello(){
        return "Hello World!";
    }
}
