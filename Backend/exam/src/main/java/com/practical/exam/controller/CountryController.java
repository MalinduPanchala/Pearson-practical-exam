package com.practical.exam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.practical.exam.model.Country;
import com.practical.exam.service.CountryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class CountryController {

	@Autowired
	private CountryService countryService;

	@GetMapping("/countries")
	public ResponseEntity<List<Country>> getAllCountries() {
		return ResponseEntity.ok(countryService.getAllCountries());
	}

	@GetMapping("/countries/{id}")
	public ResponseEntity<Country> getCountryById(@PathVariable Long id) {
		return ResponseEntity.ok().body(this.countryService.getCountryById(id));
	}

	@PostMapping("/countries")
	public ResponseEntity<Country> createCountry(@RequestBody Country country) {
		return ResponseEntity.ok(this.countryService.createCountry(country));
	}

	@PutMapping("/countries/{id}")
	public ResponseEntity<Country> updateCountry(@PathVariable Long id, @RequestBody Country country) {
		country.setId(id);
		return ResponseEntity.ok().body(this.countryService.updateCountry(country));
	}

	@DeleteMapping("/countries/{id}")
	public HttpStatus deleteCountry(@PathVariable long id) {
		this.countryService.deleteCountry(id);
		return HttpStatus.OK;
	}
}
