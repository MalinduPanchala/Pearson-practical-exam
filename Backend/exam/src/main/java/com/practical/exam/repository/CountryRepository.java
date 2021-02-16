package com.practical.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.practical.exam.model.Country;

public interface CountryRepository extends JpaRepository<Country, Long> {

}
