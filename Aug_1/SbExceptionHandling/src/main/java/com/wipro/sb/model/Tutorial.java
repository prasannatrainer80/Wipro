package com.wipro.sb.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Tutorials")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Tutorial {


	  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tutorial_generator")
	  @Id
	  private long id;

	  @Column(name = "title")
	  private String title;

	  @Column(name = "description")
	  private String description;

	  @Column(name = "published")
	  private boolean published;

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	  
}
