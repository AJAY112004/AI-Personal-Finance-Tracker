import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Pencil,
  Mail,
  MapPin,
  Save,
  Bell,
  Plus,
  Building2,
  Shield,
  Monitor,
  BadgeCheck,
  IdCard,
} from "lucide-react";

import "../CSS/Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);

  const [notifications, setNotifications] = useState({
    emailAlerts: false,
    pushNotifications: false,
    smsSecurity: false,
  });

  const [loading, setLoading] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile/");
        setProfile(response.data);
        if (response.data.notifications) {
          setNotifications(response.data.notifications);
        }
      } catch (error) {
        setError("Failed to load profile.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout>
      <div className="profile-page">

        {/* ── API ERROR BANNER ── */}
        {error && (
          <div className="error-banner">
            {error} — displaying page without live data.
          </div>
        )}

        {/* ── PAGE HEADER ── */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Settings &amp; Profile</h1>
            <p className="page-subtitle">
              Manage your institutional identity, security protocols, and financial connections.
            </p>
          </div>
          <button className="save-changes-btn">
            <Save size={15} />
            Save Changes
          </button>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="profile-layout">

          {/* ════ LEFT SIDEBAR ════ */}
          <aside className="profile-sidebar">

            {/* Avatar */}
            <div className="avatar-wrapper">
              {profile?.avatar && (
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="profile-image"
                />
              )}
              <button className="edit-avatar-btn">
                <Pencil size={13} />
              </button>
            </div>

            {/* Name & title */}
            {profile?.name && (
              <h2 className="profile-name">{profile.name}</h2>
            )}
            {profile?.title && (
              <p className="profile-title">{profile.title}</p>
            )}

            {/* Info items */}
            <div className="profile-info">
              {profile?.email && (
                <div className="info-item">
                  <Mail size={15} className="info-icon" />
                  <span>{profile.email}</span>
                </div>
              )}
              {profile?.location && (
                <div className="info-item">
                  <MapPin size={15} className="info-icon" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile?.employeeId && (
                <div className="info-item">
                  <IdCard size={15} className="info-icon" />
                  <span>Employee ID: LMN-{profile.employeeId}</span>
                </div>
              )}
            </div>

            {/* ── NOTIFICATIONS ── */}
            <div className="notifications-section">
              <div className="notifications-heading">
                <Bell size={16} />
                <span>Notifications</span>
              </div>

              <div className="notification-list">
                {/* Email Alerts */}
                <div className="notification-item">
                  <div className="notification-content">
                    <span className="notification-type">Email Alerts</span>
                    <p>Daily summaries and critical updates.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.emailAlerts}
                      onChange={() => toggleNotification("emailAlerts")}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                {/* Push Notifications */}
                <div className="notification-item">
                  <div className="notification-content">
                    <span className="notification-type">Push Notifications</span>
                    <p>Real-time transaction approvals.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.pushNotifications}
                      onChange={() => toggleNotification("pushNotifications")}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                {/* SMS Security */}
                <div className="notification-item">
                  <div className="notification-content">
                    <span className="notification-type">SMS Security</span>
                    <p>Login attempts and password resets.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.smsSecurity}
                      onChange={() => toggleNotification("smsSecurity")}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>

          </aside>

          {/* ════ RIGHT CONTENT ════ */}
          <div className="profile-content">

            {/* ── CONNECTED ACCOUNTS ── */}
            <section className="content-card">
              <div className="card-header">
                <div className="card-title">
                  <Building2 size={17} className="card-title-icon" />
                  <h3>Connected Accounts</h3>
                </div>
                <button className="add-institution-btn">
                  <Plus size={14} />
                  Add Institution
                </button>
              </div>

              <div className="accounts-grid">
                {profile?.accounts?.length > 0 ? (
                  profile.accounts.map((account) => (
                    <div className="account-card" key={account.id}>
                      <div className="account-header">
                        <div className={`bank-logo ${account.logoClass}`}>
                          {account.logoInitials}
                        </div>
                        <div className="account-meta">
                          <span className="bank-name">{account.bankName}</span>
                          {account.isPrimary && (
                            <span className="primary-badge">PRIMARY</span>
                          )}
                        </div>
                      </div>
                      <p className="account-type">{account.accountType}</p>
                      <p className="account-number">{account.accountNumber}</p>
                      <p className="account-balance">{account.balance}</p>
                    </div>
                  ))
                ) : (
                  <p className="no-accounts">No accounts connected yet.</p>
                )}
              </div>
            </section>

            {/* ── SECURITY & AUTH ── */}
            <section className="content-card">
              <div className="card-header no-border">
                <div className="card-title">
                  <Shield size={17} className="card-title-icon" />
                  <h3>Security &amp; Authentication</h3>
                </div>
              </div>

              {/* Current password */}
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="security-input"
                />
              </div>

              {/* New + Confirm */}
              <div className="password-row">
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="security-input"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="security-input"
                  />
                </div>
              </div>

              <div className="update-btn-row">
                <button className="update-password-btn">Update Password</button>
              </div>

              {/* 2FA Row */}
              <div className="two-factor-row">
                <div className="two-factor-left">
                  <div className="two-factor-title">
                    Two-Factor Authentication (2FA)
                    {profile?.twoFactorEnabled && (
                      <span className="enabled-badge">ENABLED</span>
                    )}
                  </div>
                  <p className="two-factor-text">
                    Add an extra layer of security to your account by requiring a
                    verification code in addition to your password.
                  </p>
                </div>
                <button className="manage-2fa-btn">Manage 2FA</button>
              </div>

              {/* Active Sessions */}
              <div className="sessions-section">
                <h4 className="sessions-title">Active Sessions</h4>
                {profile?.sessions?.length > 0 ? (
                  profile.sessions.map((session) => (
                    <div className="session-item" key={session.id}>
                      <div className="session-icon">
                        <Monitor size={16} />
                      </div>
                      <div className="session-info">
                        <span className="session-device">{session.device}</span>
                        <span className="session-location">{session.location}</span>
                      </div>
                      {session.isCurrent && (
                        <span className="session-active-badge">Active</span>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="no-sessions">No active sessions found.</p>
                )}
              </div>

            </section>

          </div>
          {/* end profile-content */}

        </div>
        {/* end profile-layout */}

      </div>
    </Layout>
  );
}

export default Profile;