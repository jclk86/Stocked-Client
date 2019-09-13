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

export function validateUnit(fieldValue) {
  if(fieldValue === "") {
    return "Please enter item unit";
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

export function ValidationError(props) {
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}
