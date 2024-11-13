// SecondSection.js
import React from 'react';
import styles from './styles.module.scss';

import { FaBell, FaChartBar, FaDatabase, FaDownload, FaUserShield, FaDesktop } from 'react-icons/fa';
import InfoCard from '../../InfoCard';

export default function SecondSection() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}>
        <div className="text-center d-flex flex-column align-items-center w-75">
          <p className={styles.subtitle}>
            Collect, Visualize, and Analyze IoT Sensor Data
          </p>
          <h1 className={styles.title}>IoT Sensor Data Platform</h1>
          <p className={styles.subtitle}>
            A platform designed to collect, visualize, and analyze data from IoT sensors. Monitor and analyze real-time information from sensors capturing CO₂ levels, capture system efficiency, carbon storage quantity, and safety conditions at storage locations.
          </p>
        </div>
      </div>

      <div className={`${styles.dashboard} container`}>
        <div className="row">
          {/* Coluna da esquerda com 3 cards */}
          <div className="col-md-4">
            <div className="mb-4">
              <InfoCard
                icon={FaDesktop}
                title="Interactive Dashboard"
                description="An interactive dashboard that displays real-time information such as captured CO₂ levels, capture system efficiency, carbon storage quantity, and safety conditions at storage locations. This allows operators to continuously monitor the process."
              />
            </div>
            <div className="mb-4">
              <InfoCard
                icon={FaChartBar}
                title="Real-time Data Visualization"
                description="Visualize data from IoT sensors in real-time. Gain insights into CO₂ levels, capture system efficiency, carbon storage quantity, and safety conditions at storage locations through interactive charts and graphs."
              />
            </div>
            <div className="mb-4">
              <InfoCard
                icon={FaDatabase}
                title="Data Analysis"
                description="Analyze data collected from IoT sensors to identify trends, patterns, and anomalies. Gain valuable insights to optimize the capture process, improve carbon storage efficiency, and ensure safety at storage locations."
              />
            </div>
          </div>

          {/* Coluna central com o vídeo */}
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className={styles.videoWrapper}>
            
            <iframe width="400" height="650" src="https://www.youtube.com/embed/7j3OTLmaE-g" title="Carbon capture and storage research at the British Geological Survey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" controls  className={styles.video}></iframe>
            </div>
          </div>

          {/* Coluna da direita com 3 cards */}
          <div className="col-md-4">
            <div className="mb-4">
              <InfoCard
                icon={FaBell}
                title="Alerts and Notifications"
                description="Receive alerts and notifications based on predefined thresholds or abnormal sensor readings. Stay informed about critical events and take immediate actions to mitigate risks and ensure smooth operations."
              />
            </div>
            <div className="mb-4">
              <InfoCard
                icon={FaDownload}
                title="Data Export and Integration"
                description="Export data from the IoT sensor platform for further analysis or integrate it with other systems. Seamlessly connect with existing data analytics tools or third-party platforms to leverage the collected sensor data."
              />
            </div>
            <div className="mb-4">
              <InfoCard
                icon={FaUserShield}
                title="User Access Control"
                description="Manage user access and permissions to ensure data security and privacy. Control who can view, edit, or analyze data from the IoT sensors platform to maintain data integrity and compliance."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
