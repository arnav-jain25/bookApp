package com.BookApp.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BookApp.Backend.model.Books;

public interface BooksRepository extends JpaRepository <Books,Long> {

}
