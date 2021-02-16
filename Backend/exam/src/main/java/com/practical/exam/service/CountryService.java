package com.practical.exam.service;

import java.util.List;

import com.practical.exam.model.Country;

public interface CountryService {
	Country createCountry(Country country);

	Country updateCountry(Country country);

	List<Country> getAllCountries();

	Country getCountryById(long productId);

	void deleteCountry(long id);
}
