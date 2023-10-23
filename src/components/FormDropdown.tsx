import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { FormErrorMessage, Select } from "./styles/RegistrationStyles";

const FormDropdown = (formErrors: any) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const countriesList = Country.getAllCountries();

  const statesList: any =
    country &&
    State.getAllStates().filter((state) => state.countryCode === country);

  const citiesList: any =
    state && City.getAllCities().filter((city) => city.stateCode === state);

  return (
    <>
      <Select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        {countriesList?.map((countryObject, i) => (
          <option key={i} value={countryObject.isoCode}>
            {countryObject.name}
          </option>
        ))}
      </Select>

      {formErrors.formErrors.selectCountry && (
        <FormErrorMessage>
          {formErrors.formErrors.selectCountry}
        </FormErrorMessage>
      )}

      {statesList.length ? (
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State</option>
          {statesList?.map((item: any) => {
            return <option value={item.isoCode}>{item.name} </option>;
          })}
        </Select>
      ) : (
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Please select a country first</option>
        </Select>
      )}

      {citiesList.length ? (
        <Select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          {citiesList?.map((item: any) => {
            return <option value={item.isoCode}>{item.name} </option>;
          })}
        </Select>
      ) : (
        <Select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Please select a state first</option>
        </Select>
      )}
    </>
  );
};

export default FormDropdown;
