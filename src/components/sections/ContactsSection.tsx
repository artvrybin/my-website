import { contacts } from '@data'
import { TileWrapper } from '@components/ui/TileWrapper'
import { SectionCard } from '@components/ui/SectionCard'
import styles from './ContactsSection.module.scss'
import { useCallback, useEffect, useState } from 'react'

export function ContactsSection() {
  const [emailCopied, setEmailCopied] = useState(false)

  const handleEmailClick = useCallback(async () => {
    try {
      const email = contacts.find(c => c.kind === 'email')?.url.replace('mailto:', '')
      if (email && navigator.clipboard) {
        await navigator.clipboard.writeText(email)
        setEmailCopied(true)
      }
    } catch {}
    // allow default navigation to mailto:
  }, [])

  useEffect(() => {
    if (!emailCopied) return
    const t = setTimeout(() => setEmailCopied(false), 2000)
    return () => clearTimeout(t)
  }, [emailCopied])
  return (
    <section id="contacts" className={`section ${styles.compactSection}`}>
      <div className="container">
        <h2 className={styles.title}>
          Мои <span className="accentWord">Контакты</span>
        </h2>
        <SectionCard
          className={styles.forceRow}
          left={
            <div>
              <p className={styles.lead}>
                Если у Вас есть{' '}
                <span className={styles.leadGradient}>предложение — </span>
                <span className={styles.leadGradient}> свяжитесь</span> со мной.
              </p>
              <p className="muted">Я на связи пн–пт с 8:00 до 20:00 (GMT).</p>
            </div>
          }
        >
          <div className={styles.rightWrap}>
            <div className={styles.tilesBlock}>
              <ul className={`${styles.list} ${emailCopied ? styles.listHidden : ''}`}>
                {contacts.map(contact => {
                  const target = contact.kind === 'email' ? undefined : contact.target
                  const rel = contact.kind === 'email' ? undefined : contact.rel
                  const onClick = contact.kind === 'email' ? handleEmailClick : undefined
                  return (
                    <li key={contact.url} className={styles.item}>
                      <TileWrapper
                        circleSize={64}
                        href={contact.url}
                        aria-label={contact.label}
                        target={target}
                        rel={rel}
                        onClick={onClick}
                      >
                        {contact.kind === 'email' && (
                          <span
                            className={`${styles.icon} ${styles.iconEmail}`}
                            aria-hidden="true"
                          />
                        )}
                        {contact.kind === 'telegram' && (
                          <span
                            className={`${styles.icon} ${styles.iconTelegram}`}
                            aria-hidden="true"
                          />
                        )}
                        {contact.kind === 'github' && (
                          <span
                            className={`${styles.icon} ${styles.iconGithub}`}
                            aria-hidden="true"
                          />
                        )}
                      </TileWrapper>
                    </li>
                  )
                })}
              </ul>
              {emailCopied && (
                <div className={styles.copyOverlay}>
                  <div className={styles.copyMessage}>
                    Email скопирован. Откройте веб‑почту и вставьте адрес.
                  </div>
                </div>
              )}
            </div>
            <div className={styles.footer}>© Артем Рыбин, 2025</div>
          </div>
        </SectionCard>
      </div>
    </section>
  )
}
