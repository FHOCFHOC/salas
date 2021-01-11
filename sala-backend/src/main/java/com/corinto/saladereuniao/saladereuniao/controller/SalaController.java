package com.corinto.saladereuniao.saladereuniao.controller;

import com.corinto.saladereuniao.saladereuniao.exception.ResourceNotFoundException;
import com.corinto.saladereuniao.saladereuniao.model.Sala;
import com.corinto.saladereuniao.saladereuniao.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.ReadOnlyFileSystemException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class SalaController {

    @Autowired
    private SalaRepository salaRepository;

    @GetMapping("/salas")
    public List<Sala> getTodasSalas(){
        return salaRepository.findAll();
    }

    @GetMapping("/salas/{id}")
    public ResponseEntity<Sala> getSalaById(@PathVariable(value = "id") long salaId) throws ResourceNotFoundException {
        Sala sala = salaRepository.findById(salaId).orElseThrow(() -> new ResourceNotFoundException("Sala não encontrada: " + salaId));
        return ResponseEntity.ok().body(sala);
    }

    @PostMapping("/salas")
    public Sala createSala(@Valid @RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    @PutMapping("/salas/{id}")
    public ResponseEntity<Sala> updateSala(@PathVariable(value = "id") Long salaId,
                                           @Valid @RequestBody Sala salaDetails) throws ResourceNotFoundException {
        Sala sala = salaRepository.findById(salaId).orElseThrow(() -> new ResourceNotFoundException("Sala não encontrada com id: " + salaId ));
        sala.setNome(salaDetails.getNome());
        sala.setData(salaDetails.getData());
        sala.setInicioHora(salaDetails.getInicioHora());
        sala.setTerminoHora(salaDetails.getTerminoHora());
        final Sala updateRoom = salaRepository.save(sala);
        return ResponseEntity.ok(updateRoom);
    }

    @DeleteMapping("/salas/{id}")
    public Map<String, Boolean> deleteSala(@PathVariable(value = "id") Long roomId) throws ResourceNotFoundException {
        Sala sala = salaRepository.findById(roomId).orElseThrow(() -> new ResourceNotFoundException("Sala não encontrada com id: " + roomId ));
        salaRepository.delete(sala);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deletado", Boolean.TRUE);
        return response;
    }

}
