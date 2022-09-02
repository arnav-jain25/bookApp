package com.BookApp.Backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BookApp.Backend.model.Books;
import com.BookApp.Backend.model.Favourites;
import com.BookApp.Backend.service.AuthorsService;
import com.BookApp.Backend.service.BooksService;
import com.BookApp.Backend.service.FavouritesService;
import com.BookApp.Backend.service.UserService;

@RestController
public class AuthorsController {

	@Autowired
	AuthorsService authServ;
	
	@Autowired
	BooksService bookService;

	@GetMapping("/Authors")
    public List<Books> getAllBooks(){
        return authServ.getAllBooks();
    }

    // build create employee REST API
    @PostMapping("/Authors")
    public Books createBook(@RequestBody Books book) {
        return authServ.createBook(book);
    }

    // build get employee by id REST API
    @GetMapping("/Authors/{id}")
    public Books getBookById(@PathVariable  long id){
    	Books user = authServ.getBookById(id);
        return user;
    }

    // build update employee REST API
    @PutMapping("/Authors/{id}")
    public Books updateBook(@PathVariable long id,@RequestBody Books bookDetails) {
    	Books updateBook = authServ.updateBook(id,bookDetails);
        return updateBook;
    }

    // build delete employee REST API
    @DeleteMapping("/Authors/{id}")
    public String deleteBook(@PathVariable long id){
       
    	authServ.deleteBook(id);

        return "Successfully Deleted User from database";

    }
    
//    @GetMapping("/Books/AuthorName/{aname}")
//    public List<Books> getAllBooksByAuthor(@PathVariable String aname){
//        return authServ.getAllBooksByAuthorName(aname);
//    }
}