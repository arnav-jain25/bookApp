package com.BookApp.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.BookApp.Backend.model.Books;
import com.BookApp.Backend.model.Favourites;
import com.BookApp.Backend.model.User;
import com.BookApp.Backend.repository.AuthorsRepository;
import com.BookApp.Backend.repository.BooksRepository;
import com.BookApp.Backend.repository.FavouritesRepository;
import com.BookApp.Backend.repository.UserRepository;

@Service
public class AuthorsService {
	
	@Autowired
    AuthorsRepository authRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	BooksRepository bookRepo;
	
	 public List<Books> getAllBooks(){
	        return bookRepo.findAll();
	    }

	    public Books createBook(Books book) {
	        return bookRepo.save(book);
	    }


	    public Books getBookById(long id){
	        Books book = bookRepo.findById(id).orElse(null);
	        return book;
	    }

	    public Books updateBook(long id,Books bookDetails) {
	        Books updateBook = bookRepo.findById(id).orElse(null);

	        updateBook.setBName(bookDetails.getBName());
	        updateBook.setAName(bookDetails.getAName());

	        bookRepo.save(updateBook);

	        return updateBook;
	    }

	    public String deleteBook(long id){

	        Books book = bookRepo.findById(id).orElse(null);

	        bookRepo.delete(book);

	        return "Book Successfully deleted from Database";

	    }
	    
	    public List<Books> getAllBooksByAuthorName(String aname){
	        return bookRepo.findAllByaName(aname);
	    }
   
}
