package com.BookApp.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BookApp.Backend.model.Books;
import com.BookApp.Backend.model.User;
import com.BookApp.Backend.service.BooksService;
import com.BookApp.Backend.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BooksController {

    @Autowired
    private BooksService booksService;

    @GetMapping("/Books")
    public List<Books> getAllBooks(){
        return booksService.getAllBooks();
    }

    // build create employee REST API
    @PostMapping("/Books")
    public Books createBook(@RequestBody Books book) {
        return booksService.createBook(book);
    }

    // build get employee by id REST API
    @GetMapping("/Books/{id}")
    public Books getBookById(@PathVariable  long id){
    	Books user = booksService.getBookById(id);
        return user;
    }

    // build update employee REST API
    @PutMapping("/Books/{id}")
    public Books updateBook(@PathVariable long id,@RequestBody Books bookDetails) {
    	Books updateBook = booksService.updateBook(id,bookDetails);
        return updateBook;
    }

    // build delete employee REST API
    @DeleteMapping("/Books/{id}")
    public String deleteBook(@PathVariable long id){
       
    	booksService.deleteBook(id);

        return "Successfully Deleted User from database";

    }
}