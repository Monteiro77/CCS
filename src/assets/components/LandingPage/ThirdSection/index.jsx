import styles from "./styles.module.scss";


export default function ThirdSection(){
    return(
    <section className={styles.section} >
    <div className={styles.overlay}>
        <div className="text-start text-white">
            <h1 className={styles.title}>Interactive Dashboard</h1>
            <p className={styles.subtitle}>
            A dashboard that displays real-time information, such as captured CO₂ levels, capture system efficiency, amount of carbon stored, and safety conditions at storage sites. This allows operators to monitor the process continuously.
            </p>
            <div className={styles.buttonContainer}>
                <button className={`btn ${styles.customButton} ${styles.button}`}>Vizualize Data</button>
            </div>
        </div>
    </div>
</section>
    )
}
