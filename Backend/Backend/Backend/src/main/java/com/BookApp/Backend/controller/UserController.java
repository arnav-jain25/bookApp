package com.BookApp.Backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.BookApp.Backend.model.Login;
import com.BookApp.Backend.model.Status;
import com.BookApp.Backend.model.User;
import com.BookApp.Backend.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/Users")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    // build create employee REST API
    @PostMapping("/Users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // build get employee by id REST API
    @GetMapping("/Users/{id}")
    public User getUserById(@PathVariable  long id){
        User user = userService.getUserById(id);
        return user;
    }

    // build update employee REST API
    @PutMapping("/Users/{id}")
    public User updateUser(@PathVariable long id,@RequestBody User userDetails) {
        User updateUser = userService.updateUser(id,userDetails);
        return updateUser;
    }

    // build delete employee REST API
    @DeleteMapping("/Users/{id}")
    public String deleteUser(@PathVariable long id){
       
    	userService.deleteUser(id);

        return "Successfully Deleted User from database";

    }
    
    @PostMapping("/Users/login")
    public User UserLogin(@Validated @RequestBody Login userLogin) {
    	//System.out.println(emailId+" "+pwd);
       return userService.findAllLoggedInUser(userLogin.getEmail(),userLogin.getPwd());
    }
    
    @PostMapping("/Users/logout")
    public Status UserLogout(@Validated @RequestBody Login userLogout) {
    	//System.out.println(emailId+" "+pwd);
       return userService.LogoutFunction(userLogout.getEmail(),userLogout.getPwd());
    }
}