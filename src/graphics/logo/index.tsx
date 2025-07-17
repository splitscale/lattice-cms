import React from 'react'

const css = `
  html[data-theme="dark"] path {
    fill: white;
  }

  .graphic-logo {
    width: 150px;
    height: auto;
  }`

export const Logo = () => {
  return (
    <div
      className="graphic-logo"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="logo">
        <img
          src="/assets/logo.png"
          alt="Splitscale Logo"
          style={{ height: '100px', width: 'auto' }}
        />
      </div>
      <div
        style={{
          marginTop: '16px',
          fontSize: '16px',
          color: 'white',
          fontFamily: 'Geist, sans-serif',
          textAlign: 'center',
        }}
      >
        Splitscale Admin
      </div>
    </div>
  )
}
