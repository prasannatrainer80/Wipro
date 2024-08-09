package com.example.demo;

import org.springframework.data.annotation.Id;

public class Tutorial {

	  @Id
	  private int id;
	  private String title;
	  private String description;
	  private boolean published;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isPublished() {
		return published;
	}
	public void setPublished(boolean published) {
		this.published = published;
	}
	public Tutorial() {
		// TODO Auto-generated constructor stub
	}
	public Tutorial(int id, String title, String description, boolean published) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.published = published;
	}
	  
	  
}
