package com.example.app.backend.exceptions;

public class DataNotExistException extends IllegalArgumentException {

    public DataNotExistException(String msg) {
        super(msg);
    }
}
