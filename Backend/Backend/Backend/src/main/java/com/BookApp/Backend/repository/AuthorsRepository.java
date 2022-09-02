package com.BookApp.Backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BookApp.Backend.model.Authors;
import com.BookApp.Backend.model.Favourites;

public interface AuthorsRepository extends JpaRepository <Authors,Long> {

}
