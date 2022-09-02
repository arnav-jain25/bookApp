package com.BookApp.Backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BookApp.Backend.model.Books;

public interface BooksRepository extends JpaRepository <Books,Long> {
	
	public List<Books> findAllByaName(String aname);

}
