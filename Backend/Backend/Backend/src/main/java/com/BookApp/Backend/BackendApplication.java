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
		
		bookRepo.save(new Books("Alice Adventures in Wonderland","https://images-na.ssl-images-amazon.com/images/I/A1esmi-0sqL.jpg","Lewis Carroll","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Adventures of Tom Sawyer","https://images-na.ssl-images-amazon.com/images/I/41fK2D8MUjL.jpg","Mark Twain","01/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Treasure Island","https://kbimages1-a.akamaihd.net/02a9646b-89c8-4cff-b994-ed9c5c0e5d7d/1200/1200/False/treasure-island-209.jpg","Robert Louis Stevenson","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Pride and Prejudice","https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg","Jane Austen","03/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Wuthering Heights","https://kbimages1-a.akamaihd.net/8d53913a-437b-4d8f-aa82-560e90129f84/353/569/90/False/wuthering-heights-124.jpg","Emily Brontë","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Scarlet Letter","https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/book/3/y/d/the-scarlet-letter-reader-s-library-classics-original-imagegd2bhhzhupg.jpeg?q=70","Nathaniel Hawthorne","03/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Gulliver's Travels","https://m.media-amazon.com/images/I/51-8gPee03L.jpg","Jonathan Swift","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Pilgrim's Progress","https://m.media-amazon.com/images/I/51q6W09hRpL.jpg","John Bunyan","01/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("A Christmas Carol","https://static.wikia.nocookie.net/disney/images/c/c7/A_Christmas_Carol.jpg/revision/latest?cb=20140318001905","Charles Dickens","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("David Copperfield","https://upload.wikimedia.org/wikipedia/en/5/5a/David_Copperfield_%281999_film%29.jpg","Charles Dickens","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("A Tale of Two Cities","https://images.penguinrandomhouse.com/cover/9780451530578","Charles Dickens","01/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Little Women","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562690475l/1934._SY475_.jpg", "Louisa May Alcott","03/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("Great Expectations","https://images-na.ssl-images-amazon.com/images/I/91zmPRqkAdL.jpg", "Charles Dickens","02/09/2022","Palazzo Editions","english"));
		bookRepo.save(new Books("The Hobbit","https://harpercollins.co.in/book-cover/PowerPoint_jpg/9780008118044.jpg", "J.R.R. Tolkien","02/09/2022","Palazzo Editions","english"));

		
	}

}
