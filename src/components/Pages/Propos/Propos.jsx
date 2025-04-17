import styles from "./propos.module.css"

function propos() {
  return (
    <div>
      <div className={styles.propos}>
      <div className={styles.container}>
        <div className={styles.design}>
          <img src="src/assets/images/Pcportable.png" alt="proposimg" className={styles.image} />
            <div className={styles.overlay}>
                <p>
                  Behind the word mountains, <br />
                  countries Vokalia and <br />
                  there live the blind texts.
                </p>
            </div>
          </div>
      </div>
            <div className={styles.text}>
              <h1>A Propos</h1>
              <p>
                 Electronic System est une entreprise spécialisée <br />
                 dans la vente de produits électroniques. Nous avons <br />
                 créé ce site pour faciliter la communication entre <br />
                 nos clients et nos fournisseurs. Nous aimons vous <br />
                 proposer des produits de haute qualité et de <br />
                 meilleures conditions de vente.
              </p>
            </div>
      </div>
    </div>
  )
}

export default propos