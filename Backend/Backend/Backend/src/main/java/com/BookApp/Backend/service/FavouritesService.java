package com.BookApp.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.BookApp.Backend.model.Books;
import com.BookApp.Backend.model.Favourites;
import com.BookApp.Backend.model.User;
import com.BookApp.Backend.repository.BooksRepository;
import com.BookApp.Backend.repository.FavouritesRepository;
import com.BookApp.Backend.repository.UserRepository;
import com.BookApp.Backend.model.Status;

@Service
public class FavouritesService {
	
	@Autowired
    FavouritesRepository favRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	BooksRepository bookRepo;
	
	public List<Favourites> readWishList(long userId) {
	        return favRepo.findAllByUserId(userId);
	    }

	public Favourites createFavourite(Favourites favourite, long userId, long bookId) {
		User user = userRepo.findById(userId).get();
		Books book = bookRepo.findById(bookId).get();
		book.setFav(true);
		favourite.setUser(user);
		favourite.setBook(book);
		return this.favRepo.save(favourite);
	}

	public Status deleteFromFavourite(long userId, long bookId) {
		Favourites fav=favRepo.findByUserIdAndBookId(userId, bookId).orElse(null);
		Books book = bookRepo.findById(bookId).get();
		System.out.println(fav);
		if(fav!=null)
		{
			favRepo.deleteById(fav.getId());
			book.setFav(false);
			return Status.SUCCESS;
		}
		return Status.FAILURE;
	}

   
}
