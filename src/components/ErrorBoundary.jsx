'use client';

import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 'var(--space-lg)',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--border)',
          color: 'var(--fg-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875rem',
          textAlign: 'center',
        }}>
          <div>
            <p style={{ marginBottom: '8px', fontWeight: 500 }}>Something went wrong.</p>
            <p style={{ color: 'var(--fg-subtle)', fontSize: '0.8rem' }}>
              Try refreshing the page or contact support.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
