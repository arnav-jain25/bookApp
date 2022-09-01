package com.BookApp.Backend.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

import javax.persistence.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private long id;

	    @Column(name = "name")
	    private String name;

	    @Column(name = "email_id")
	    private String email;
	    
	    @Column(name= "Phone_no")
	    private long phNo;
	    
	    @Column(name = "password")
	    private String pwd;
	    
	    @Column(name="loggedIn")
	    private boolean loggedIn=false;
	    
	    @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (!(o instanceof User)) return false;
	        User user = (User) o;
	        return Objects.equals(email, user.email) &&
	                Objects.equals(pwd, user.pwd);
	    }
	    
	    
	    

}
