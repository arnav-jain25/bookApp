package com.BookApp.Backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;

import com.BookApp.Backend.model.Status;
import com.BookApp.Backend.model.User;
import com.BookApp.Backend.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
    private UserRepository userRepository;

   
    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }


    public User getUserById(long id){
        User user = userRepository.findById(id).orElse(null);
        return user;
    }

    public User updateUser(long id,User userDetails) {
        User updateUser = userRepository.findById(id).orElse(null);

        updateUser.setName(userDetails.getName());
        updateUser.setEmail(userDetails.getEmail());
        updateUser.setPhNo(userDetails.getPhNo());
        updateUser.setPwd(userDetails.getPwd());

        userRepository.save(updateUser);

        return updateUser;
    }

    public ResponseEntity<HttpStatus> deleteUser(long id){

        User user = userRepository.findById(id).orElse(null);

        userRepository.delete(user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
    
    public Status findAllLoggedInUser(String email, String pwd) {
    	System.out.println(email+" "+pwd);
    	User userFound = userRepository.findByEmailAndPwd(email,pwd).orElse(null);
        if (userFound!=null) {
        	userFound.setLoggedIn(true);
            userRepository.save(userFound);
            return Status.SUCCESS; // Return userFound while integrating
        }
        return Status.FAILURE;
    }
    
    public Status LogoutFunction(String email, String pwd) {
    	System.out.println(email+" "+pwd);
    	User userFound = userRepository.findByEmailAndPwd(email,pwd).orElse(null);
        if (userFound!=null) {
        	userFound.setLoggedIn(false);
            userRepository.save(userFound);
            return Status.SUCCESS; // Return userFound while integrating
        }
        return Status.FAILURE;
    }
}
