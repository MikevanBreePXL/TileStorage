package nl.nao.TileStorageBackend.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double width;
    private double length;
    private double squareMetersPerBox;
    private double amountOfBoxes;
    private double totalSquareMeters;

    public Tile() {
        // JPA Only!
    }

    public Tile(String name, double width, double length, double squareMetersPerBox, double amountOfBoxes, double totalSquareMeters) {
        this.name = name;
        this.width = width;
        this.length = length;
        this.squareMetersPerBox = squareMetersPerBox;
        this.amountOfBoxes = amountOfBoxes;
        this.totalSquareMeters = totalSquareMeters;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        this.width = width;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getSquareMetersPerBox() {
        return squareMetersPerBox;
    }

    public void setSquareMetersPerBox(double squareMetersPerBox) {
        this.squareMetersPerBox = squareMetersPerBox;
    }

    public double getAmountOfBoxes() {
        return amountOfBoxes;
    }

    public void setAmountOfBoxes(double amoungOfBoxes) {
        this.amountOfBoxes = amoungOfBoxes;
    }

    public double getTotalSquareMeters() {
        return totalSquareMeters;
    }

    public void setTotalSquareMeters(double totalSquareMeters) {
        this.totalSquareMeters = totalSquareMeters;
    }

    

}
