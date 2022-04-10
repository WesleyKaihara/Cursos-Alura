package br.com.alura.forum.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import br.com.alura.forum.modelo.Topico;

import java.util.List;

//Herda metodos da interface JpaRepository - com metodos prontos de manipulação de dados para um repositorio
public interface TopicoRepository extends JpaRepository<Topico, Long> {

    List<Topico> findByCursoNome(String nomeCurso);
}
