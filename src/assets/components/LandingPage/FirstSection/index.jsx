import styles from './styles.module.scss';


export default function FirstSection() {

    return(
        <section className={styles.section} >
            <div className={styles.overlay}>
                <div className="text-start text-white">
                    <h1 className={styles.title}>Collect, Visualize, and Analyze IoT Sensor Data</h1>
                    <p className={styles.subtitle}>
                        An online platform designed to collect, visualize, and analyze data from IoT sensors.
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={`btn ${styles.customButton} ${styles.button}`}>Interactive Dashboard</button>
                        <button className={`btn btn-outline-light ${styles.button}`}>More</button>
                    </div>
                </div>
            </div>
        </section>
    )
    
};
