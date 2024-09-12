package nl.nao.TileStorageBackend.api.record;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record SaveNewTileRecord(
    @NotBlank String name,
    @NotNull Double width,
    @NotNull Double length,
    @JsonProperty("square_meters_per_box")
    @NotNull Double squareMetersPerBox,
    @JsonProperty("amount_per_box")
    @NotNull Double amountPerBox,
    @JsonProperty("total_square_meters")
    @NotNull Double totalSquareMeters
) {
}
