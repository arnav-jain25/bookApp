package com.BookApp.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.BookApp.Backend.model.Books;
import com.BookApp.Backend.repository.BooksRepository;

@Service
public class BooksService {
	
	@Autowired
    private BooksRepository booksRepository;

   
    public List<Books> getAllBooks(){
        return booksRepository.findAll();
    }

    public Books createBook(Books book) {
        return booksRepository.save(book);
    }


    public Books getBookById(long id){
        Books book = booksRepository.findById(id).orElse(null);
        return book;
    }

    public Books updateBook(long id,Books bookDetails) {
        Books updateBook = booksRepository.findById(id).orElse(null);

        updateBook.setBName(bookDetails.getBName());
        updateBook.setAName(bookDetails.getAName());

        booksRepository.save(updateBook);

        return updateBook;
    }

    public String deleteBook(long id){

        Books book = booksRepository.findById(id).orElse(null);

        booksRepository.delete(book);

        return "Book Successfully deleted from Database";

    }
}
