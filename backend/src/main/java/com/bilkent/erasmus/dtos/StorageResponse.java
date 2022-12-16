package com.bilkent.erasmus.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StorageResponse {

    private String fileName;

    private String fileDownloadUri;

    private String fileType;

    private long size;
}
