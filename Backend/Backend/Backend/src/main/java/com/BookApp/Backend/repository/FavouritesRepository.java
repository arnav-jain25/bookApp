package com.BookApp.Backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BookApp.Backend.model.Favourites;

public interface FavouritesRepository extends JpaRepository <Favourites,Long> {
	
	//get all favorites by given userid
		public List<Favourites> findAllByUserId(long userId);
		public Optional<Favourites> findByUserIdAndBookId(long userId, long bookId);
}
