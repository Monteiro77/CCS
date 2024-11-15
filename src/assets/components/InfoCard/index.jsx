import React from 'react';
import styles from './styles.module.scss';

function InfoCard({ icon: Icon, title, description, onClick }) {
  return (
    <button
      className={`card ${styles.card}`}
      style={{ minHeight: '140px' }}
      onClick={onClick}
    >
      <div className={`card-body ${styles.cardBody}`}>
        <Icon className={styles.icon} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </button>
  );
}

export default InfoCard;
