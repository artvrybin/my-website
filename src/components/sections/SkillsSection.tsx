import { skills, softSkills } from '@data'
import { Pill } from '@components/ui/Pill'
import styles from './SkillsSection.module.scss'

export function SkillsSection() {
  const hardLines = Object.values(skills).map(arr =>
    (arr as readonly string[]).join(', '),
  )
  return (
    <section id="skills" className={`section ${styles.root}`}>
      <div className="container">
        <div className={styles.split}>
          <div className={styles.col}>
            <h2 className={`${styles.title} splitTitle`}>
              <span className="accentWord">Hard</span> скилы
            </h2>
            <ul className={styles.stack}>
              {hardLines.map(line => (
                <Pill as="li" key={line}>
                  {line}
                </Pill>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h2 className={`${styles.title} splitTitle`}>
              <span className="accentWord">Soft</span> скилы
            </h2>
            <ul className={styles.stack}>
              {softSkills.map(s => (
                <Pill as="li" key={s}>
                  {s}
                </Pill>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
