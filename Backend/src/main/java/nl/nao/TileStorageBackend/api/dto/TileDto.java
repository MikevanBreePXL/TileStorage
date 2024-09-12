package nl.nao.TileStorageBackend.api.dto;

public record TileDto(
    Long id,
    String name,
    double width,
    double length,
    double squareMetersPerBox,
    double amountPerBox,
    double totalSquareMeters
) {
}
