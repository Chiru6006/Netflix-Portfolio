import React, { useState } from 'react';

// Profile Definitions
const PROFILES = [
  { id: 'recruiter', name: 'Recruiter', color: '#E50914', icon: '💼' },
  { id: 'developer', name: 'Developer', color: '#0070F3', icon: '💻' },
  { id: 'visitor', name: 'Visitor', color: '#10B981', icon: '🚀' },
];

// Sample Projects & Experience Data
const PROJECTS = [
  {
    id: 1,
    title: 'Network Automation Engine',
    category: 'Automation',
    desc: 'Automated network provisioning using Python, Terraform, and Ansible across multi-vendor infrastructure.',
    tags: ['Python', 'Terraform', 'Ansible', 'BGP'],
  },
  {
    id: 2,
    title: 'Fleet Health Monitoring',
    category: 'Infrastructure',
    desc: 'Data center fleet health monitoring and automated issue resolution pipelines.',
    tags: ['Data Center', 'Monitoring', 'Python'],
  },
  {
    id: 3,
    title: 'AI Network Traffic Analyzer',
    category: 'AI / ML',
    desc: 'Machine learning model to detect anomalies in live network traffic and routing protocols.',
    tags: ['AI/ML', 'Python', 'BGP', 'OSPF'],
  },
];

export default function App() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<any | null>(null);

  return (
    <div style={styles.container}>
      {!selectedProfile ? (
        /* SCREEN 1: WHO'S WATCHING? */
        <div style={styles.profileWrapper}>
          <h1 style={styles.title}>Who's Watching?</h1>
          <div style={styles.avatarGrid}>
            {PROFILES.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile.name)}
                style={styles.card}
              >
                <div
                  style={{ ...styles.avatar, backgroundColor: profile.color }}
                >
                  <span style={{ fontSize: '3rem' }}>{profile.icon}</span>
                </div>
                <span style={styles.profileName}>{profile.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* SCREEN 2: NETFLIX DASHBOARD */
        <div style={styles.dashboard}>
          {/* Top Navigation */}
          <nav style={styles.navbar}>
            <div style={styles.logo}>PORTFOLIO</div>
            <button
              style={styles.switchBtn}
              onClick={() => setSelectedProfile(null)}
            >
              Switch Profile ({selectedProfile})
            </button>
          </nav>

          {/* Hero Banner */}
          <header style={styles.hero}>
            <span style={styles.badge}>FEATURED HIGHLIGHT</span>
            <h1 style={styles.heroTitle}>AI & Network Automation</h1>
            <p style={styles.heroDesc}>
              Building intelligent infrastructure, network automation pipelines,
              and data center fleet health monitoring.
            </p>
            <div style={styles.heroBtns}>
              <button
                style={styles.playBtn}
                onClick={() => setActiveProject(PROJECTS[0])}
              >
                ▶ View Primary Project
              </button>
            </div>
          </header>

          {/* Project Rows */}
          <section style={styles.rowSection}>
            <h2 style={styles.rowTitle}>Featured Projects</h2>
            <div style={styles.row}>
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  style={styles.projectCard}
                  onClick={() => setActiveProject(proj)}
                >
                  <h3 style={styles.cardTitle}>{proj.title}</h3>
                  <span style={styles.cardCategory}>{proj.category}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Modal Pop-up for Project Details */}
          {activeProject && (
            <div
              style={styles.modalOverlay}
              onClick={() => setActiveProject(null)}
            >
              <div
                style={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  style={styles.closeBtn}
                  onClick={() => setActiveProject(null)}
                >
                  ✕
                </button>
                <h2>{activeProject.title}</h2>
                <p style={styles.modalDesc}>{activeProject.desc}</p>
                <div style={styles.tagGroup}>
                  {activeProject.tags.map((tag: string, idx: number) => (
                    <span key={idx} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Styling
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#141414',
    color: '#FFFFFF',
    minHeight: '100vh',
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  title: { fontSize: '3rem', fontWeight: '500', marginBottom: '2rem' },
  avatarGrid: { display: 'flex', gap: '2rem' },
  card: { cursor: 'pointer', textAlign: 'center' },
  avatar: {
    width: '130px',
    height: '130px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileName: {
    display: 'block',
    marginTop: '1rem',
    color: '#808080',
    fontSize: '1.2rem',
  },
  dashboard: { width: '100%' },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#111',
  },
  logo: {
    color: '#E50914',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    letterSpacing: '2px',
  },
  switchBtn: {
    backgroundColor: 'transparent',
    color: '#FFF',
    border: '1px solid #555',
    padding: '6px 14px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  hero: {
    padding: '80px 40px',
    backgroundColor: '#181818',
    borderBottom: '1px solid #222',
  },
  badge: {
    color: '#E50914',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  heroTitle: { fontSize: '3.5rem', margin: '10px 0' },
  heroDesc: {
    color: '#AAA',
    maxWidth: '600px',
    fontSize: '1.1rem',
    marginBottom: '20px',
  },
  playBtn: {
    backgroundColor: '#FFF',
    color: '#000',
    border: 'none',
    padding: '12px 24px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  rowSection: { padding: '40px' },
  rowTitle: { fontSize: '1.5rem', marginBottom: '15px' },
  row: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '10px',
  },
  projectCard: {
    minWidth: '240px',
    height: '140px',
    backgroundColor: '#2f2f2f',
    borderRadius: '6px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  cardTitle: { fontSize: '1.1rem', margin: 0 },
  cardCategory: { color: '#E50914', fontSize: '0.85rem', marginTop: '4px' },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#181818',
    padding: '30px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '90%',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    color: '#FFF',
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  modalDesc: { color: '#CCC', margin: '15px 0' },
  tagGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  tag: {
    backgroundColor: '#333',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
  },
};
