package com.BookApp.Backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Authors")
public class Authors {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="A_id")
	private long id;
	
	@Column(name="A_Name")
	private long name;
 
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL)
    private List<Books> book;
	
}
