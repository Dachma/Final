/* eslint-disable react/prop-types */
import Select from "react-select";

const styles = {
  valueContainer: (css) => ({
    ...css,
    flexWrap: "nowrap",
    role: "menuitemcheckbox",
  }),
  multiValueRemove: () => {
    return {
      display: "none",
    };
  },
  multiValue: () => {
    return {
      "background-color": "white",
    };
  },
};

const Dropdown = (props) => {
  return (
    <Select
      isClearable={true}
      styles={styles}
      hideSelectedOptions={false}
      value={props.selectedCountry}
      onChange={props.setSelectedCountry}
      placeholder="Choose Country"
      options={props.options}
    />
  );
};

export default Dropdown;
