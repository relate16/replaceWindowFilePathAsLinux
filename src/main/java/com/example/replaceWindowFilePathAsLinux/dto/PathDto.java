package com.example.replaceWindowFilePathAsLinux.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class PathDto {
    private String windowPath;
    private String linuxPath;
}
