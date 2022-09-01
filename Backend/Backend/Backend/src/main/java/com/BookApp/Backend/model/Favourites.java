package com.BookApp.Backend.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Favourites")
public class Favourites {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="f_id")
	private long id;
	private String rating;
	
    
	@OneToOne(targetEntity = User.class)
    @JoinColumn (name = "user_id",nullable = false)
    private User user;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "book_id")
    private Books book;
	
    public Favourites(User user, Books book) {
        this.user = user;
        this.book = book;
        
    }

}
