import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountrySelection.module.css";
import { fetchCountries } from "../../api";

const CountrySelection = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountires] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountires(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountrySelection;
