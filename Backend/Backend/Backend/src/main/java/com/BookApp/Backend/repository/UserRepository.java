package com.BookApp.Backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.BookApp.Backend.model.User;

@Repository
public interface UserRepository extends JpaRepository <User,Long> {
	
	Optional<User> findByEmailAndPwd(String email,String pwd);

}
