
import React from 'react';
import styles from './styles.module.scss';

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-body">
        <Icon className={styles.icon} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
