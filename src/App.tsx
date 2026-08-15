import React, { useState } from 'react';

// Profile Definitions
const PROFILES = [
  { id: 'recruiter', name: 'Recruiter', color: '#E50914', icon: '💼' },
  { id: 'engineer', name: 'Engineering Lead', color: '#0070F3', icon: '💻' },
  { id: 'visitor', name: 'Visitor', color: '#10B981', icon: '🚀' },
];

// Tailored Projects
const PROJECTS = [
  {
    id: 1,
    title: 'AI-Driven Network Automation Framework',
    category: 'Network Automation / Python',
    desc: 'Automated network provisioning and configuration drift detection across multi-vendor infrastructure using Python, Terraform, and Ansible.',
    tags: ['Python', 'Terraform', 'Ansible', 'BGP', 'CI/CD'],
  },
  {
    id: 2,
    title: 'Data Center Fleet Health Monitoring',
    category: 'Enterprise Infrastructure',
    desc: 'Designed and implemented real-time fleet health monitoring and automated issue resolution pipelines for large-scale data center environments.',
    tags: ['Data Center', 'Fleet Health', 'Monitoring', 'Troubleshooting'],
  },
  {
    id: 3,
    title: 'Multi-Vendor Routing & SD-WAN Architecture',
    category: 'Routing & Security',
    desc: 'Engineered high-availability routing architectures utilizing BGP, OSPF, and SD-WAN with enterprise Palo Alto and Cisco hardware.',
    tags: ['BGP', 'OSPF', 'SD-WAN', 'Cisco', 'Palo Alto'],
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
                <div style={{ ...styles.avatar, backgroundColor: profile.color }}>
                  <span style={{ fontSize: '3rem' }}>{profile.icon}</span>
                </div>
                <span style={styles.profileName}>{profile.name}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* SCREEN 2: HIGH-IMPACT NETFLIX DASHBOARD */
        <div style={styles.dashboard}>
          {/* Top Navigation */}
          <nav style={styles.navbar}>
            <div style={styles.logo}>CHIRANJEEVI BALAJI</div>
            <button style={styles.switchBtn} onClick={() => setSelectedProfile(null)}>
              Switch Profile ({selectedProfile})
            </button>
          </nav>

          {/* Hero Banner */}
          <header style={styles.hero}>
            <div style={styles.roleSubHeader}>NETWORK ENGINEER @ ENTERPRISE DATA CENTERS</div>
            <h1 style={styles.heroTitle}>Chiranjeevi Nadambaram Balaji</h1>
            
            <p style={styles.heroDesc}>
              Network Engineer with <strong>5+ years of experience</strong> scaling and optimizing multi-vendor enterprise infrastructure. Specialized in <strong>BGP, OSPF, SD-WAN</strong>, and building AI-driven network automation pipelines with <strong>Python, Terraform, and Ansible</strong>. Proven track record managing <strong>fleet health monitoring</strong> and data center hardware resiliency.
            </p>

            {/* Quick Action Buttons */}
            <div style={styles.heroBtns}>
              <button style={styles.playBtn} onClick={() => setActiveProject(PROJECTS[0])}>
                ▶ View Lead Automation Project
              </button>
              <button style={styles.secondaryBtn} onClick={() => alert('Add your resume link here!')}>
                📄 Resume
              </button>
            </div>

            {/* Pill Highlights */}
            <div style={styles.pillContainer}>
              <span style={styles.pill}>BGP & OSPF</span>
              <span style={styles.pill}>SD-WAN</span>
              <span style={styles.pill}>Cisco / Palo Alto</span>
              <span style={styles.pill}>Python & Terraform</span>
              <span style={styles.pill}>Ansible Automation</span>
              <span style={styles.pill}>Fleet Health Monitoring</span>
            </div>
          </header>

          {/* Project Rows */}
          <section style={styles.rowSection}>
            <h2 style={styles.rowTitle}>Featured Engineering Projects</h2>
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
            <div style={styles.modalOverlay} onClick={() => setActiveProject(null)}>
              <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeBtn} onClick={() => setActiveProject(null)}>
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
  profileName: { display: 'block', marginTop: '1rem', color: '#808080', fontSize: '1.2rem' },
  dashboard: { width: '100%' },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#111',
  },
  logo: { color: '#E50914', fontWeight: 'bold', fontSize: '1.4rem', letterSpacing: '2px' },
  switchBtn: {
    backgroundColor: 'transparent',
    color: '#FFF',
    border: '1px solid #555',
    padding: '6px 14px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  hero: { padding: '60px 40px', backgroundColor: '#181818', borderBottom: '1px solid #222' },
  roleSubHeader: { color: '#E50914', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10px' },
  heroTitle: { fontSize: '3.2rem', margin: '5px 0 15px 0' },
  heroDesc: { color: '#CCC', maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '25px' },
  heroBtns: { display: 'flex', gap: '15px', marginBottom: '25px' },
  playBtn: {
    backgroundColor: '#FFF',
    color: '#000',
    border: 'none',
    padding: '12px 24px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#FFF',
    border: 'none',
    padding: '12px 24px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  pillContainer: { display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' },
  pill: {
    backgroundColor: 'rgba(229, 9, 20, 0.15)',
    border: '1px solid #E50914',
    color: '#FFF',
    padding: '5px 14px',
    borderRadius: '20px',
    fontSize: '0.85rem',
  },
  rowSection: { padding: '40px' },
  rowTitle: { fontSize: '1.5rem', marginBottom: '15px' },
  row: { display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px' },
  projectCard: {
    minWidth: '260px',
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
  cardCategory: { color: '#E50914', fontSize: '0.85rem', marginTop: '6px' },
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
  modalDesc: { color: '#CCC', margin: '15px 0', lineHeight: '1.5' },
  tagGroup: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
  tag: { backgroundColor: '#333', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem' },
};