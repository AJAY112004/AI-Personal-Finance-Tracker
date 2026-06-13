function AuthLayout({
  leftContent,
  children,
}) {
  return (
    <div className="auth-page">

      <div className="auth-left">
        {leftContent}
      </div>

      <div className="auth-right">
        {children}
      </div>

    </div>
  );
}

export default AuthLayout;