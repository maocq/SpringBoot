package com.maocq;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/users")
public class UsersController {

	private static final List<User> users = new ArrayList<User>(
			Arrays.asList(
					new User(12, "Mauricio", "carmonaesc@gmail.com"),
					new User(34, "Susana", "susana@gmail.com"),
					new User(56, "Valentinca", "valentina@gmail.com"),
					new User(78, "Monica", "monica@gmail.com")
							));

	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	public List<User> getUsers() {
		return users;
	}
	
	@RequestMapping(value = "/{userID}", method = RequestMethod.GET)
	public User getUser(@PathVariable Integer userID) {
		for (User user : users) {		
			if (userID.equals(user.getIde()))
				return user;
		}
		return null;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void addUser(@RequestBody @Valid User user) {
		users.add(user);
	}

	@RequestMapping(value = "/{userID}", method = RequestMethod.PUT)
	public void updateUser(@PathVariable Integer userID, @RequestBody @Valid User userInfo) {
		for (User user : users) {
			if (userID.equals(user.getIde())) {
				user.setName(userInfo.getName());
				user.setEmail(userInfo.getEmail());
				break;
			}
		}
	}

	@RequestMapping(value = "/{userID}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable Integer userID) {
		for (User user : users)
			if (userID.equals(user.getIde())) {
				users.remove(user);
				break;
			}
	}

}
