/*
package com.bilkent.erasmus.services;

import com.bilkent.erasmus.exceptions.FileStorageException;
import com.bilkent.erasmus.exceptions.MyFileNotFoundException;
import com.bilkent.erasmus.utils.FileStorageProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Slf4j
@Service
public class StorageService {

    private final Path fileStorageLocation;

    public StorageService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = file.getOriginalFilename();
        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }
            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            log.info(targetLocation.toString());
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            return fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public Resource loadFileAsResource(String fileName) {
        log.info("here");
        try {
            log.info("here");
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            log.info("here");
            log.info(this.fileStorageLocation.toString());
            Resource resource = new UrlResource(filePath.toUri());
            if(resource.exists()) {
                return resource;
            } else {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new MyFileNotFoundException("File not found " + fileName, ex);
        }
    }
}

*/
/* private final Path root = Paths.get("/Users/yahya/Documents/GitHub/erasmust/backend/src/main/java/com/bilkent/erasmus/uploads");

    public void init() {
        try {
            Files.createDirectories(root);
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    public void save(MultipartFile file) {
        log.info(root.toString());
        try {
            Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
        } catch (Exception e) {
            if (e instanceof FileAlreadyExistsException) {
                throw new RuntimeException("A file of that name already exists.");
            }
            throw new RuntimeException(e.getMessage());
        }
    }

    public Resource load(String filename) {
        try {
            Path file = root.resolve(filename);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    public void deleteAll() {
        FileSystemUtils.deleteRecursively(root.toFile());
    }

    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.root, 1).filter(path -> !path.equals(this.root)).map(this.root::relativize);
        } catch (IOException e) {
            throw new RuntimeException("Could not load the files!");
        }
    }

*//*

*/
/*  private final PdfRepository repository;

    public StorageService(PdfRepository repository) {
        this.repository = repository;
    }

    public FileData storeFile(MultipartFile file) throws Exception {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new Exception("Sorry! Filename contains invalid path sequence " + fileName);
            }

            FileData dbFile = new FileData(fileName, file.getContentType(), file.getBytes());

            return repository.save(dbFile);
        } catch (IOException ex) {
            throw new Exception("Could not store file " + fileName + ". Please try again!");
        }
    }

    public FileData getFile(String fileName) throws Exception {
        return repository.findByName(fileName)
                .orElseThrow(() -> new Exception("File not found with id " + fileName));
    }

    public FileData uploadToLocalFileSystem(MultipartFile file) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Path path = Paths.get(fileBasePath + fileName);
        try {
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/files/download/")
                .path(fileName)
                .toUriString();
        return ResponseEntity.ok(fileDownloadUri);
    }
*//*

*/
/*private final PdfRepository pdfRepository;

    public StorageService(PdfRepository pdfRepository) {
        this.pdfRepository = pdfRepository;
    }

    public String uploadPdf(MultipartFile file) throws IOException {

        PdfData pdfData = pdfRepository.save(PdfData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .pdfData(FileCompressor.compressPdf(file.getBytes())).build());
        if (pdfData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }

    public byte[] downloadPdf(String fileName){
        Optional<PdfData> dbImageData = pdfRepository.findByName(fileName);
        if (dbImageData.isEmpty())
            System.out.println("no file found");
        else
            System.out.println("something is wrong");
        byte[] images = FileCompressor.decompressPdf(dbImageData.get().getPdfData());
        return images;
    }*/
