package nl.nao.TileStorageBackend.util;

import nl.nao.TileStorageBackend.api.dto.TileDto;
import nl.nao.TileStorageBackend.api.record.SaveNewTileRecord;
import nl.nao.TileStorageBackend.domain.Tile;

public class TileMapper {
    public static Tile mapRecordToEntity(SaveNewTileRecord record) {
        return new Tile(record.name(), record.width(), record.length(), record.squareMetersPerBox(), record.amountPerBox(), record.totalSquareMeters());
    }

    public static TileDto mapEntityToDto(Tile entity) {
        return new TileDto(entity.getId(), entity.getName(), entity.getWidth(), entity.getLength(), entity.getSquareMetersPerBox(), entity.getAmountOfBoxes(), entity.getTotalSquareMeters());
    }
}
