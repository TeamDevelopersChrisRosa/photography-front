import React from "react";
import "./styles.scss";

export default function Loading() {
  return (
    <div className="loading">
      <label htmlFor="progress-bar">Chargement en cours...</label>
      <progress id="progress-bar" value={0} max={100} />
    </div>
  );
}