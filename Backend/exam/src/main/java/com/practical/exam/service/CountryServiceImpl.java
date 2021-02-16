package com.practical.exam.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.practical.exam.exceptions.ResourceNotFoundException;
import com.practical.exam.model.Country;
import com.practical.exam.repository.CountryRepository;

@Service
@Transactional
public class CountryServiceImpl implements CountryService {

	@Autowired
	private CountryRepository countryRepository;

	@Override
	public Country createCountry(Country country) {
		return countryRepository.save(country);
	}

	@Override
	public Country updateCountry(Country country) {
		Optional<Country> countryDB = this.countryRepository.findById(country.getId());

		if (countryDB.isPresent()) {
			Country countryUpdate = countryDB.get();
			countryUpdate.setId(country.getId());
			countryUpdate.setName(country.getName());
			countryRepository.save(countryUpdate);
			return countryUpdate;
		} else {
			throw new ResourceNotFoundException("Country with id :" + country.getId() + ", could not be found with id");
		}
	}

	@Override
	public List<Country> getAllCountries() {
		return this.countryRepository.findAll();
	}

	@Override
	public Country getCountryById(long countryId) {
		Optional<Country> countryDB = this.countryRepository.findById(countryId);

		if (countryDB.isPresent()) {
			return countryDB.get();
		} else {
			throw new ResourceNotFoundException("Country with id :" + countryId + ", could not be found with id");
		}
	}

	@Override
	public void deleteCountry(long id) {
		Optional<Country> countryDB = this.countryRepository.findById(id);

		if (countryDB.isPresent()) {
			this.countryRepository.delete(countryDB.get());
		} else {
			throw new ResourceNotFoundException("Country with id :" + id + ", could not be found with id");
		}
	}

}
