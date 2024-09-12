package nl.nao.TileStorageBackend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import nl.nao.TileStorageBackend.api.dto.TileDto;
import nl.nao.TileStorageBackend.api.record.SaveNewTileRecord;
import nl.nao.TileStorageBackend.service.TileService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/tiles")
public class TileController {
    private TileService tileService;

    @Autowired
    public TileController(TileService tileService) {
        this.tileService = tileService;
    }

    @PostMapping()
    public ResponseEntity<Void> saveNewTile(@RequestBody @Valid SaveNewTileRecord record) {
        tileService.saveNewTile(record);
        return ResponseEntity.ok().build();
    }

    @GetMapping()
    public List<TileDto> getAllTiles() {
        return tileService.getAllTiles();
    }

    @GetMapping("/{id}")
    public TileDto getTileById(@PathVariable Long id) {
        return tileService.getTileById(id);
    }
}
