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
  const [loading, setLoading] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("••••••••");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: false,
    smsSecuirty: true,
  });

  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/profile/");
      setProfile(response.data);
    } catch (error) {
      console.error("Profile Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const toggleNotification = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (loading) {
    return (
      <Layout>
        <div className="profile-loading">
          <h2 className="loading-text">Loading Profile...</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="profile-page">

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
              <img
                src={profile?.avatar || "https://i.pravatar.cc/300?img=47"}
                alt="Profile"
                className="profile-image"
              />
              <button className="edit-avatar-btn">
                <Pencil size={13} />
              </button>
            </div>

            {/* Name & title */}
            <h2 className="profile-name">
              {profile?.name || "Eleanor Vance"}
            </h2>
            <p className="profile-title">
              {profile?.title || "Managing Director, Wealth Strategies"}
            </p>

            {/* Info items */}
            <div className="profile-info">
              <div className="info-item">
                <Mail size={15} className="info-icon" />
                <span>{profile?.email || "e.vance@luminafinance.com"}</span>
              </div>
              <div className="info-item">
                <MapPin size={15} className="info-icon" />
                <span>{profile?.location || "New York, NY"}</span>
              </div>
              <div className="info-item">
                <IdCard size={15} className="info-icon" />
                <span>Employee ID: LMN-{profile?.employeeId || "8842"}</span>
              </div>
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
                      checked={notifications.smsSecuirty}
                      onChange={() => toggleNotification("smsSecuirty")}
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
                {/* Account 1 */}
                <div className="account-card">
                  <div className="account-header">
                    <div className="bank-logo jpmorgan">JP</div>
                    <div className="account-meta">
                      <span className="bank-name">JPMorgan Chase</span>
                      <span className="primary-badge">PRIMARY</span>
                    </div>
                  </div>
                  <p className="account-type">Corporate Checking</p>
                  <p className="account-number">•••• •••• •••• 4092</p>
                  <p className="account-balance">$12,450,000.00</p>
                </div>

                {/* Account 2 */}
                <div className="account-card">
                  <div className="account-header">
                    <div className="bank-logo goldman">GS</div>
                    <div className="account-meta">
                      <span className="bank-name">Goldman Sachs</span>
                    </div>
                  </div>
                  <p className="account-type">Investment Acct ••••</p>
                  <p className="account-number">•••• •••• •••• 8810</p>
                  <p className="account-balance">$45,200,500.00</p>
                </div>
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
                    <span className="enabled-badge">ENABLED</span>
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
                <div className="session-item">
                  <div className="session-icon">
                    <Monitor size={16} />
                  </div>
                  <div className="session-info">
                    <span className="session-device">Mac OS Safari</span>
                    <span className="session-location">New York, US • Current Session</span>
                  </div>
                  <span className="session-active-badge">Active</span>
                </div>
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