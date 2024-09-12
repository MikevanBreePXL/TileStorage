package nl.nao.TileStorageBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.nao.TileStorageBackend.api.dto.TileDto;
import nl.nao.TileStorageBackend.api.record.SaveNewTileRecord;
import nl.nao.TileStorageBackend.domain.Tile;
import nl.nao.TileStorageBackend.exception.ResourceNotFoundException;
import nl.nao.TileStorageBackend.repository.TileRepository;
import nl.nao.TileStorageBackend.util.TileMapper;

@Service
public class TileService {
    private TileRepository tileRepository;

    @Autowired
    public TileService(TileRepository tileRepository) {
        this.tileRepository = tileRepository;
    }

    public void saveNewTile(SaveNewTileRecord record) {
        tileRepository.save(TileMapper.mapRecordToEntity(record));
    }

    public List<TileDto> getAllTiles() {
        List<Tile> tiles = tileRepository.findAll();
        return tiles.stream().map(TileMapper::mapEntityToDto).toList();
    }

    public TileDto getTileById(Long id) {
        Tile tile = tileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tile with id [" + id + "] not found"));
        return TileMapper.mapEntityToDto(tile);
    }
}
