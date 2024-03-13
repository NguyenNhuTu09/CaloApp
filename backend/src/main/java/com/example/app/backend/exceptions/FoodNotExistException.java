package com.example.app.backend.exceptions;

public class FoodNotExistException extends IllegalArgumentException {

    public FoodNotExistException(String msg) {
        super(msg);
    }
}
