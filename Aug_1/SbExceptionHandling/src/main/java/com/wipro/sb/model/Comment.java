package com.wipro.sb.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Comments")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment {

	  @Id
	  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comment_generator")
	  private Long id;

	  @Lob
	  private String content;

	  @ManyToOne(fetch = FetchType.LAZY, optional = false)
	  @JoinColumn(name = "tutorial_id", nullable = false)
	  @OnDelete(action = OnDeleteAction.CASCADE)
	  @JsonIgnore
	  private Tutorial tutorial;

}
