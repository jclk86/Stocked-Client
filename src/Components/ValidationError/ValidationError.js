import React from "react";

export function validateName(fieldValue) {
  const name = fieldValue.trim();
  if (name.length === 0) {
    return "Please enter a name";
  } else if (name.length < 3 || name.length > 20) {
    return "Item name should be between 3 and 20 characters";
  }
}

export function validateQuantity(fieldValue) {
  if (fieldValue === "") {
    return "Please enter quantity";
  } else if (fieldValue > 1000) {
    return "Please limit your amount to under 1000";
  }
}

export function validateUnit(fieldValue) {
  const unit = fieldValue.trim();
  if (unit.length === 0) {
    return "Please enter item unit";
  } else if (unit.length > 5) {
    return "Item unit should 5 or less characters";
  }
}

export function validateCost(fieldValue) {
  if (fieldValue === "") {
    return "Please enter cost";
  } else if (fieldValue > 500) {
    return "Please limit cost to under $500.00";
  }
}

export function validateTag(fieldValue) {
  if (!fieldValue) {
    return "Please select a folder";
  }
}

export function validatePassword(fieldValue) {
  const passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,72}$/;
  if (!fieldValue.match(passFormat)) {
    return "Must be between 9 and 72 characters, and include at least one upper case, lower case, number and special character";
  }
}

export function validateEmail(fieldValue) {
  const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailFormat.test(fieldValue)) {
    return "Please enter a valid email format";
  }
}

export function ValidationError(props) {
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}
