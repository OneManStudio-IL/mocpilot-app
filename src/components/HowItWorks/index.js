import React from 'react';
import Translate from '@docusaurus/Translate';

// "How MOCPilot works" diagram: inline SVG that follows the docs color mode (CSS variables).
const box = { rx: 14, strokeWidth: 2 };

function Node({ x, y, w, h, title, sub, color }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} {...box} fill={color} fillOpacity="0.14" stroke={color} />
      <text x={x + w / 2} y={y + h / 2 - 4} textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--ifm-font-color-base)">
        {title}
      </text>
      <text x={x + w / 2} y={y + h / 2 + 18} textAnchor="middle" fontSize="12.5" fill="var(--ifm-font-color-base)" opacity="0.75">
        {sub}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ifm-font-color-base)" strokeOpacity="0.45" strokeWidth="2" markerEnd="url(#hiw-arrow)" />
  );
}

export default function HowItWorks() {
  const t = (id, msg) => <Translate id={`howItWorks.${id}`}>{msg}</Translate>;
  return (
    <div style={{ margin: '24px 0', overflowX: 'auto' }}>
      <svg viewBox="0 0 760 300" style={{ width: '100%', minWidth: 560, height: 'auto' }} role="img" aria-label="Profile, dashboard, program and hubs">
        <defs>
          <marker id="hiw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--ifm-font-color-base)" fillOpacity="0.45" />
          </marker>
        </defs>
        <rect x="8" y="8" width="744" height="284" rx="22" fill="none" stroke="var(--ifm-font-color-base)" strokeOpacity="0.25" strokeDasharray="6 6" strokeWidth="2" />
        <text x="30" y="40" fontSize="15" fontWeight="700" fill="var(--ifm-font-color-base)" opacity="0.8">{t('profile', 'Profile = one model')}</text>
        <Node x={40} y={110} w={190} h={90} title={t('dashboard', 'Dashboard')} sub={t('dashboardSub', 'controls on the screen')} color="#2f8fdd" />
        <Node x={285} y={110} w={190} h={90} title={t('program', 'Program')} sub={t('programSub', 'Logic Blocks or Quick Links')} color="#e63946" />
        <Node x={530} y={110} w={190} h={90} title={t('hubs', 'Hubs')} sub={t('hubsSub', 'motors, lights, sensors')} color="#2a9d8f" />
        <Arrow x1={232} y1={155} x2={281} y2={155} />
        <Arrow x1={477} y1={145} x2={526} y2={145} />
        <Arrow x1={526} y1={168} x2={477} y2={168} />
        <Node x={40} y={225} w={190} h={52} title={t('gamepad', 'Gamepad')} sub="" color="#8a8a96" />
        <Arrow x1={180} y1={225} x2={300} y2={202} />
        <text x="380" y="250" textAnchor="middle" fontSize="13" fill="var(--ifm-font-color-base)" opacity="0.75">{t('play', '▶ Play runs the program')}</text>
        <text x="625" y="250" textAnchor="middle" fontSize="13" fill="var(--ifm-font-color-base)" opacity="0.75">{t('bluetooth', 'over Bluetooth')}</text>
      </svg>
    </div>
  );
}
