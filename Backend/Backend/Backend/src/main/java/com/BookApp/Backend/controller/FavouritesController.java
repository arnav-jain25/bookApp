package com.BookApp.Backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BookApp.Backend.model.Books;
import com.BookApp.Backend.model.Favourites;
import com.BookApp.Backend.service.FavouritesService;
import com.BookApp.Backend.service.UserService;
import com.BookApp.Backend.model.Status;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FavouritesController {

	@Autowired
	FavouritesService favServ;
	
	@Autowired
	UserService userServ;

	@GetMapping("/favourites/user/{uId}")
    public List<Books> getWishList(@PathVariable("uId") int userId) {
            List<Favourites> body = favServ.readWishList(userId);
            List<Books> books = new ArrayList<Books>();
            for (Favourites fav : body) {
                    books.add(fav.getBook());
            }
            return books;
    }
	
	@PostMapping("/favourites/user/{uId}/books/{bId}")
	public Favourites addToFav(@RequestBody Favourites favourite , @PathVariable("uId") long userId, @PathVariable("bId") long bookId) {
		
		return favServ.createFavourite(favourite, userId, bookId);
	}

	
	@DeleteMapping("/favourites/user/{uId}/books/{bId}")
	public Status DeleteFav(@PathVariable("uId") long userId,@PathVariable("bId") long bookId) {
		return favServ.deleteFromFavourite(userId, bookId);
	}

}