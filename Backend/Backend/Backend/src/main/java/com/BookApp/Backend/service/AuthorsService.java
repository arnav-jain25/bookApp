//package com.BookApp.Backend.service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.BookApp.Backend.model.Authors;
//import com.BookApp.Backend.model.Books;
//import com.BookApp.Backend.model.Favourites;
//import com.BookApp.Backend.model.User;
//import com.BookApp.Backend.repository.AuthorsRepository;
//import com.BookApp.Backend.repository.BooksRepository;
//import com.BookApp.Backend.repository.FavouritesRepository;
//import com.BookApp.Backend.repository.UserRepository;
//
//@Service
//public class AuthorsService {
//	
//	@Autowired
//    AuthorsRepository authRepo;
//	@Autowired
//	UserRepository userRepo;
//	@Autowired
//	BooksRepository bookRepo;
//	
//	 public List<Authors> getAllAuthors(){
//	        return authRepo.findAll();
//	    }
//
//	    public Authors createAuthor(Authors author, long bookId) {
//	    	Books book = bookRepo.findById(bookId).get();
//	    	List<Books> books = new ArrayList<Books>();
//	    	books.add(book);
////	    	author.setBook(book);
//	      author.setBook(books);
//	        return authRepo.save(author);
//	    }
//
//
//	    public Authors getAuthorById(long id){
//	        Authors author = authRepo.findById(id).orElse(null);
//	        return author;
//	    }
//
////	    public Books updateBook(long id,Books bookDetails) {
////	        Books updateBook = bookRepo.findById(id).orElse(null);
////
////	        updateBook.setBName(bookDetails.getBName());
////	        updateBook.setAName(bookDetails.getAName());
////
////	        bookRepo.save(updateBook);
////
////	        return updateBook;
////	    }
////
////	    public String deleteBook(long id){
////
////	        Books book = bookRepo.findById(id).orElse(null);
////
////	        bookRepo.delete(book);
////
////	        return "Book Successfully deleted from Database";
////
////	    }
////	    
////	    public List<Books> getAllBooksByAuthorName(String aname){
////	        return bookRepo.findAllByaName(aname);
////	    }
////   
//}
