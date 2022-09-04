package com.BookApp.Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.BookApp.Backend.model.Books;
import com.BookApp.Backend.repository.BooksRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {
	
	@Autowired
	private BooksRepository bookRepo;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		bookRepo.save(new Books("Alice Adventures in Wonderland","Lewis Carroll","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Adventures of Tom Sawyer","Lewis Carroll","01/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Treasure Island","Robert Louis Stevenson","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Pride and Prejudice","Jane Austen","03/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Wuthering Heights","Emily Brontë","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Scarlet Letter","Nathaniel Hawthorne","03/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Gulliver's Travels","Jonathan Swift","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Pilgrim's Progress","John Bunyan","01/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("A Christmas Carol","Charles Dickens","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("David Copperfield","Charles Dickens","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("A Tale of Two Cities",	"Charles Dickens","01/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Little Women",	"Louisa May Alcott","03/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Great Expectations","Charles Dickens","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Hobbit","J.R.R. Tolkien","02/09/2022","Palazzo Editions","english"));

		
	}

}
