package com.maocq;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

public class User {

	@NotNull
	private Integer ide;
	@NotEmpty
	private String name;
	@NotEmpty
	private String email;

	public User() {
	}

	public User(int ide, String name, String email) {
		this.ide = ide;
		this.name = name;
		this.email = email;
	}

	public Integer getIde() {
		return ide;
	}

	public void setIde(Integer ide) {
		this.ide = ide;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
