import React, { useState } from 'react';

export default function ViewProduct() {
  // State only to toggle search bar visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <span>Home</span>
        <span style={styles.separator}>/</span>
        <span>Product</span>
        <span style={styles.separator}>/</span>
        <span style={styles.activeBreadcrumb}>View</span>
      </div>

      {/* Collapsible Search Section */}
      {isSearchOpen && (
        <div style={styles.topCard}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search Name"
              style={styles.searchInput}
            />
            <button type="button" style={styles.searchButton}>
              🔍
            </button>
          </div>
        </div>
      )}

      {/* Main Table Card */}
      <div style={styles.mainCard}>
        {/* Header Bar */}
        <div style={styles.tableHeaderBar}>
          <h2 style={styles.title}>View Product</h2>

          {/* Action Buttons */}
          <div style={styles.actionButtonGroup}>
            {/* Click this icon to toggle search bar open / close */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              title="Toggle Search"
              style={styles.iconBtn}
            >
              ⏳
            </button>

            <button type="button" style={styles.statusBtn}>
              Change Status
            </button>

            <button type="button" style={styles.deleteBtn}>
              Delete
            </button>
          </div>
        </div>

        {/* Static Data Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.thRow}>
                <th style={{ ...styles.th, width: '40px' }}>
                  <input type="checkbox" />
                </th>
                <th style={styles.th}>NAME</th>
                <th style={{ ...styles.th, textAlign: 'center' }}>THUMBNAILS</th>
                <th style={styles.th}>DESCRIPTION</th>
                <th style={styles.th}>SHORT DESCRIPTION</th>
                <th style={styles.th}>S.NO</th>
                <th style={{ ...styles.th, textAlign: 'center' }}>STATUS</th>
                <th style={{ ...styles.th, textAlign: 'center' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={styles.tr}>
                <td style={styles.td}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...styles.td, fontWeight: '500' }}>Neil Sims</td>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
                    alt="avatar"
                    style={styles.avatar}
                  />
                </td>
                <td style={styles.td}>CEO Of SunPark</td>
                <td style={styles.td}>5</td>
                <td style={styles.td}>1</td>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <span style={{ ...styles.statusBadge, backgroundColor: '#22c55e' }}>
                    Active
                  </span>
                </td>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <button type="button" style={styles.editBtn}>✏️</button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr style={styles.tr}>
                <td style={styles.td}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...styles.td, fontWeight: '500' }}>Neil Sims</td>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
                    alt="avatar"
                    style={styles.avatar}
                  />
                </td>
                <td style={styles.td}>CEO Of SunPark</td>
                <td style={styles.td}>5</td>
                <td style={styles.td}>2</td>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <span style={{ ...styles.statusBadge, backgroundColor: '#ef4444' }}>
                    Deactive
                  </span>
                </td>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <button type="button" style={styles.editBtn}>✏️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#ebecee',
    minHeight: '100vh',
    padding: '24px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  breadcrumb: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '16px',
  },
  separator: {
    margin: '0 8px',
    color: '#999',
  },
  activeBreadcrumb: {
    color: '#111',
    fontWeight: 'bold',
  },
  topCard: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    border: '1px solid #dcdfe4',
    padding: '16px 20px',
    marginBottom: '16px',
  },
  searchContainer: {
    display: 'flex',
    maxWidth: '320px',
  },
  searchInput: {
    flex: 1,
    padding: '7px 12px',
    fontSize: '13px',
    border: '1px solid #c9ccd2',
    borderRight: 'none',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    outline: 'none',
  },
  searchButton: {
    backgroundColor: '#1d4ed8',
    color: '#fff',
    border: 'none',
    padding: '0 14px',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  mainCard: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    border: '1px solid #dcdfe4',
    overflow: 'hidden',
  },
  tableHeaderBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: '1px solid #edf0f2',
    flexWrap: 'wrap',
    gap: '12px',
  },
  title: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#1e293b',
  },
  actionButtonGroup: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  iconBtn: {
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    padding: '7px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  statusBtn: {
    backgroundColor: '#15803d',
    color: '#fff',
    border: 'none',
    padding: '7px 14px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '500',
  },
  deleteBtn: {
    backgroundColor: '#b91c1c',
    color: '#fff',
    border: 'none',
    padding: '7px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '500',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: '13px',
  },
  thRow: {
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
  },
  th: {
    padding: '12px 16px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: '0.5px',
  },
  tr: {
    borderBottom: '1px solid #edf0f2',
  },
  td: {
    padding: '12px 16px',
    color: '#334155',
    verticalAlign: 'middle',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    verticalAlign: 'middle',
  },
  statusBadge: {
    display: 'inline-block',
    padding: '4px 14px',
    color: '#fff',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
  },
  editBtn: {
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  },
};