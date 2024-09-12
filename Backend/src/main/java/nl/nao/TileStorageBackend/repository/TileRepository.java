package nl.nao.TileStorageBackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import nl.nao.TileStorageBackend.domain.Tile;

public interface TileRepository extends JpaRepository<Tile, Long> {
    Optional<Tile> findByName(String name);
}
