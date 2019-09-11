import React from "react";

export function validateName(fieldValue) {
  if (fieldValue.length === 0) {
    return "Please enter a name";
  }
}

export function validateQuantity(fieldValue) {
  if (fieldValue === "") {
    return "Please enter quantity";
  }
}

export function validateUnit(fieldValue) {
  if (fieldValue === "") {
    return "Please enter item unit";
  }
}

export function validateCost(fieldValue) {
  if (fieldValue === "") {
    return "Please enter cost";
  }
}

export function ValidationError(props) {
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }
  return <></>;
}
